# Loja ocupando a largura total

Código para deixar sua loja ocupando a largura total da tela.

## Como usar

No painel da sua loja:

- Adicione o código escolhido do `style.css` como estilo CSS da forma que preferir.

- Toda Loja com largura total

```css
.conteiner {
  max-width: 100vw;
}
```

- Definindo apenas o cabeçalho com largura total

```css
#cabecalho .conteiner {
  max-width: 100vw;
}
```

- Definindo apenas o corpo com largura total

```css
#corpo .conteiner {
  max-width: 100vw;
}
```

- Definindo quais páginas terão largura total

```css
.pagina-inicial .conteiner,
.pagina-produto .conteiner {
  max-width: 100vw;
}
```

- Definindo quais páginas não terão largura total

```css
.pagina-carrinho .conteiner,
.pagina-cadastro .conteiner {
  max-width: 1140px;
}
```
