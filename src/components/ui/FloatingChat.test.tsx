import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FloatingChat } from './FloatingChat';
import React from 'react';

// Hacemos mock de fetch
global.fetch = vi.fn();

describe('FloatingChat Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debería renderizar solo el botón para abrir el chat inicialmente', () => {
    render(<FloatingChat />);
    // El botón flotante principal
    expect(screen.getByRole('button', { name: /abrir chat/i })).toBeDefined();
    // El título de la ventana no debería estar
    expect(screen.queryByText('Nefetech AI')).toBeNull();
  });

  it('debería abrir la ventana de chat al hacer clic en el botón flotante', async () => {
    const user = userEvent.setup();
    render(<FloatingChat />);
    
    const toggleBtn = screen.getByRole('button', { name: /abrir chat/i });
    await user.click(toggleBtn);
    
    // Verificamos que se haya abierto
    expect(screen.getByText('Nefetech AI')).toBeDefined();
    expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeDefined();
  });

  it('debería permitir al usuario enviar un mensaje y mostrar la respuesta de la IA', async () => {
    const user = userEvent.setup();
    // Preparamos la respuesta de la API simulada
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ reply: '¡Hola! Soy la IA de Nefetech, ¿en qué te ayudo?' })
    });

    render(<FloatingChat />);
    
    // Abrir el chat
    await user.click(screen.getByRole('button', { name: /abrir chat/i }));
    
    // Buscar input e ingresar texto
    const input = screen.getByPlaceholderText('Escribe tu mensaje...');
    await user.type(input, 'Hola IA');
    
    // Presionar Enter (o clickear el botón submit)
    const form = input.closest('form');
    if (form) {
      // Como RTL no simula bien el enter sin submitEvent nativo a veces, llamamos al evento submit del form
      await user.keyboard('{Enter}');
    }
    
    // Verificamos que el mensaje del usuario aparezca en pantalla
    expect(screen.getByText('Hola IA')).toBeDefined();
    
    // Verificamos que la IA responde asíncronamente
    await waitFor(() => {
      expect(screen.getByText('¡Hola! Soy la IA de Nefetech, ¿en qué te ayudo?')).toBeDefined();
    });

    // Validamos que el request fetch se haya armado correctamente
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/v1/chat', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hola IA' })
    }));
  });
});
