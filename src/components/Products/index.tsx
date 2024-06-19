import './style.css'

function Products() {
  return (
    <div id='background'>
    <section id='section-products'>
        <div className='row-default'>
            <div className='product-card'>
                <img src="https://blog.etiquetaunica.com.br/wp-content/uploads/2023/09/capa-post-bolsas-pretas-que-sao-classicas-060823.jpg" alt="" />
                <h3>Bolsa Joana</h3>
                <p>Bolsa de couro legítimo</p>
                <h3 className='preco'>R$500,00</h3>
                <button className='button-default'>Comprar</button>
            </div>

            <div className='product-card'>
                <img src="https://imaginapresentes.com.br/cdn/shop/products/bolsa-luxo-gabbane-0-gamborini-977622.jpg?v=1683339337" alt="" />
                <h3>Bolsa Cris</h3>
                <p>Bolsa de couro legítimo</p>
                <h3 className='preco'>R$500,00</h3>
                <button className='button-default'>Comprar</button>
            </div>

            <div className='product-card'>
                <img src="https://img4.dhresource.com/0x0/f3/albu/km/g/13/df7ca4db-c90d-4fd9-84cc-fef3a3ff7eed.jpg" alt="" />
                <h3>Mini bolsa Lua</h3>
                <p>Bolsa de couro legítimo</p>
                <h3 className='preco'>R$500,00</h3>
                <button className='button-default'>Comprar</button>
            </div>
        </div>

        <div className='row-default'>
            <div className='product-card'>
                <img src="https://inovetecstore.com.br/cdn/shop/products/S7fd7c7366dea4be7a46ea5c0e933ddb1A_800x.jpg?v=1675896876" alt="" />
                <h3>Mini bolsa Priscila</h3>
                <p>Bolsa de couro legítimo</p>
                <h3 className='preco'>R$500,00</h3>
                <button className='button-default'>Comprar</button>
            </div>

            <div className='product-card'>
                <img src="https://blog.canseivendi.com.br/wp-content/uploads/2022/10/entenda-porque-bolsas-de-grife-sao-um-investimento-gucci-gg-marmont.jpg" alt="" />
                <h3>Bolsa Leila</h3>
                <p>Bolsa de couro legítimo</p>
                <h3 className='preco'>R$500,00</h3>
                <button className='button-default'>Comprar</button>
            </div>

            <div className='product-card'>
                <img src="https://ae01.alicdn.com/kf/S0803c64a279c41e8ac48adc77227c421W/bolsa-feminina-bolsa-feminina-transversal-bolsas-grife-luxo-MOODS-Contraste-Cor-Top-al-a-Sacos-Para.jpg" alt="" />
                <h3>Bolsa Joana</h3>
                <p>Bolsa de couro legítimo</p>
                <h3 className='preco'>R$500,00</h3>
                <button className='button-default'>Comprar</button>
            </div>
        </div>

        <button className='button-default'>Mais produtos</button>
    </section>
    </div>
  )
}

export default Products