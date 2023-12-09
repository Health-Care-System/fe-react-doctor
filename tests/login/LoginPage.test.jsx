import { render, screen, waitFor, expect, fireEvent } from '@testing-library/react'
import { describe, test } from 'vitest'
import { LoginPage } from '../src/pages/Login/LoginPage'

const renderLogin = () => {
    render(
        <LoginPage />
    )
}

describe('test login page form', () => {

    test('should display username and password error', async () => {
        renderLogin()

        const submit = screen.getByText('Masuk')
        fireEvent.click(submit)

        await waitFor(() => {
            const emailError = screen.getByText('Email wajib diisi!')
            const passwordError = screen.getByText('Password wajib diisi!')

            expect(emailError).toBeInTheDocument();
            expect(passwordError).toBeInTheDocument();
        })
    })

    test('should display username and password', async () => {
        renderLogin()

        const email = screen.getByPlaceholderText('Masukkan email')
        const password = screen.getByPlaceholderText('Masukkan password')
        const submit = screen.getByText('Masuk')


        fireEvent.change(email, { target : { value : 'felix@example.com'}})
        fireEvent.change(password, { target : { value : 'felix123'}})
        fireEvent.click(submit)

        expect(email).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })
})