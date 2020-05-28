function Nave ()
{
    this.z = 0;
    this.esquerda = false;
    this.direita = false;
    this.largura = 100;
    this.altura = 51;
    this.posicao = (canvas.width - this.largura) / 2;
    this.atira = false;
    this.centroXElipse = this.largura / 2;
    this.centroYElipse = 29;
    this.raioXElipse = this.largura / 2;
    this.raioYElipse = 15;
    this.protecao = false;
    this.tempo = 0;
    this.contagem = 0;
    this.diferenca = 5;
    this.imagem1 = new Image ();
    this.imagem2 = new Image ();
    this.imagem1.onload = function ()
    {
        contexto.drawImage (this.imagem1, this.posicao, this.z, this.largura, this.altura);
    };
    this.imagem2.onload = function ()
    {
        
    };
    this.imagem1.src = 'img/alien.png';
    this.imagem2.src = 'img/escudo.png';
    this.desenhar = function ()
    {
        if (this.protecao)
        {
            contexto.drawImage (this.imagem2, this.posicao - this.diferenca, this.z - this.diferenca, this.largura + this.diferenca * 2, this.altura + this.diferenca * 2);
        }
        contexto.drawImage (this.imagem1, this.posicao, this.z, this.largura, this.altura);
    };
    this.paraEsquerda = function ()
    {
        if (this.posicao >= 0)
        {
            this.posicao -= 5;
        }
    };
    this.paraDireita = function ()
    {
        if (this.posicao <= (canvas.width - this.largura))
        {
            this.posicao += 5;
        }
    };
    this.reinicio = function ()
    {
        this.esquerda = false;
        this.direita = false;
        this.posicao = (canvas.width - this.largura) / 2;
    };
}