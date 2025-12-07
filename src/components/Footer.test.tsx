
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the brand name', () => {
    render(<Footer />);
    expect(screen.getByText('Chatat')).toBeInTheDocument();
  });

  it('should render the section headers', () => {
    render(<Footer />);
    expect(screen.getByText('Produk')).toBeInTheDocument();
    expect(screen.getByText('Perusahaan')).toBeInTheDocument();
    expect(screen.getByText('Bantuan')).toBeInTheDocument();
  });

  it('should render all the links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Fitur' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Solusi' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Tentang Kami' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Kontak' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Panduan' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Komunitas' })).toBeInTheDocument();
  });

  it('should render the copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Chatat. All rights reserved./i)).toBeInTheDocument();
  });
});
