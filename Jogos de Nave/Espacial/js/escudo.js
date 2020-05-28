function Escudo ()
{
    this.escudo = false;
    this.tamanho = 50;
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.centro = this.tamanho / 2;
    this.raio = this.tamanho / 2;
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'img/bola_azul_aqua.png';
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.tamanho, this.tamanho);
    };
    this.proximo = function ()
    {
        this.posicaoY -= 5;
        if (this.posicaoY <= -this.tamanho)
        {
            this.escudo = false;
        }
    };
}