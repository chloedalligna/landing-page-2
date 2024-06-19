import { useState } from 'react'
import './style.css'

function Form() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [tel, setTel] = useState<number | string>('');
    
    return (
        <section id='section-form'>
            <h2>Cadastre-se na nossa newsletter para nunca perder as novidades luxuosas!</h2>

            <form action="submit">
                <fieldset className="fieldset-form">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
                </fieldset>

                <fieldset className="fieldset-form">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" pattern=".+@example\.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </fieldset>

                <fieldset className="fieldset-form">
                    <label htmlFor="tel">Telefone:</label>
                    <input type="tel" name="tel" pattern="[1-9]{2} [0-9]{4}-[0-9]{4}" required onChange={(e) => setTel(Number(e.target.value))} value={tel}/>
                </fieldset>

                <button type="submit" className='button-default'>Cadastrar</button>
            </form>
        </section>
    )
}

export default Form