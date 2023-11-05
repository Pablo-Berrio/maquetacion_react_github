function Principal(){
    return(
        <main>
            <section className="contenedor-form">
                <h1>Sign in to GitHub</h1>
                <form>
                    <label htmlFor="">Username or email address</label>
                    <input type="text" />
                    <label htmlFor="" className="label-contraseña">Password <a href="#">Forgot password?</a></label>
                    <input type="password"/>
                    
                    <button>Sign in</button>
                </form>
                <article className="crear-cuenta">
                    <p>New GitHub? <a href="#">Create an account.</a></p>
                </article>
            </section>
            
        </main>
    )
}

export default Principal