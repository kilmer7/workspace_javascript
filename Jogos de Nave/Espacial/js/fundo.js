function Fundo ()
{
    this.z = 0;
    this.posicao = 0;
    this.totalX = 975;
    this.totalY = 600;
    var troca;
    this.imagem1 = new Image ();
    this.imagem2 = new Image ();
    this.imagem1.onload = function ()
    {
        contexto.drawImage (this.imagem1, this.z, this.posicao, this.totalX, this.totalY);
    };
    this.imagem2.onload = function ()
    {
        contexto.drawImage (this.imagem2, this.z, this.posicao - this.totalY, this.totalX, this.totalY);
    };
    this.sorteio = function ()
    {
        if (Math.random () <= 1 / 2)
        {
            this.imagem1.src = 'img/espaco2.png';
            this.imagem2.src = 'img/espaco4.png';
        }
        else
        {
            this.imagem1.src = 'img/espaco1.png';
            this.imagem2.src = 'img/espaco3.png';
        }
    };
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem1, this.z, this.posicao, this.totalX, this.totalY);
        contexto.drawImage (this.imagem2, this.z, this.posicao + this.totalY, this.totalX, this.totalY);
    };
    this.proximo = function ()
    {
        this.posicao -= 1;
        if (this.posicao <= -this.totalY)
        {
            this.posicao = 0;
            troca = this.imagem1;
            this.imagem1 = this.imagem2;
            this.imagem2 = troca;
        }
    };
    this.reinicio = function ()
    {
        this.posicao = 0;
        this.sorteio ();
    };
}