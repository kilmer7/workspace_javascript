function Explosao ()
{
    this.explosao = false;
    this.tamanho = 64;
    this.origemX = 0;
    this.origemY = 0;
    this.destinoX = 0;
    this.destinoY = 0;
    this.centro = this.tamanho / 2;
    this.controle = 1;
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'img/explosao.png';
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.origemX, this.origemY, this.tamanho, this.tamanho, this.destinoX, this.destinoY, this.tamanho, this.tamanho);
    };
    this.proximo = function ()
    {
        this.origemX += this.tamanho;
        if (this.controle == 16)
        {
            this.origemX = 0;
            this.origemY = 0;
            this.controle = 0;
            this.explosao = false;
        }
        else if (this.controle % 4 == 0)
        {
            this.origemX = 0;
            this.origemY += this.tamanho;
        }
        this.controle ++;
    };
}