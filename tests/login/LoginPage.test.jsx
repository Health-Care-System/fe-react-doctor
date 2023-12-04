import { render, screen, waitFor, expect, fireEvent } from '@testing-library/react'
import { describe, test } from 'vitest'
import { LoginPage } from '../src/pages/Login/LoginPage'

const renderLogin = () => {
    render(
        <LoginPage />
    )
}

describe('test login page', () => {

    test('should display username and password', async () => {
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
})