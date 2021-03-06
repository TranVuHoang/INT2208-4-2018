import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Output() waitForOtherPage= new EventEmitter<string>();
  Cards=[
    { title:"Bird", id:"1",
      content: [
        { typeBack: 'text', typeFront: 'img', back: 'Paraket', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8249e80335efb41dadbd5c8936755183' },
        { typeBack: 'text', typeFront: 'img', back: 'Macaw', front: 'https://d9np3dj86nsu2.cloudfront.net/image/bf39a08c037663a0ffcdc058a929adc0' },
        { typeBack: 'text', typeFront: 'img', back: 'Blue and Gold Parrot', front: 'https://d9np3dj86nsu2.cloudfront.net/image/35023b50a18d18c3f21500bb42ea568a' },
        { typeBack: 'text', typeFront: 'img', back: 'Cardinal', front: 'https://d9np3dj86nsu2.cloudfront.net/image/01dc70780cb93e6a920ff1d7e0d2d446' },
        { typeBack: 'text', typeFront: 'img', back: 'Blue Jay', front: 'https://d9np3dj86nsu2.cloudfront.net/image/34f55bda0245680ca5f9948241240564' },
        { typeBack: 'text', typeFront: 'img', back: 'Penguin', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2392e707630d9439165be4624e95538a' },
        { typeBack: 'text', typeFront: 'img', back: 'Woodpecker', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4d31a4dbc767636019ccbb339a035bf0' },
        { typeBack: 'text', typeFront: 'img', back: 'Hawk', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4e5fcc08ddf606d8a6132d5c1576cf8f' },
        { typeBack: 'text', typeFront: 'img', back: 'Eagle', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4900298670056cea704a1de55eac2d26' },
        { typeBack: 'text', typeFront: 'img', back: 'Mallard', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1147496c6057e92eb95209eb35fdb148' },
        { typeBack: 'text', typeFront: 'img', back: 'Duck', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0419435b0d8876960185377ef5df4483' },
        { typeBack: 'text', typeFront: 'img', back: 'Goose', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3ec51856321772a4962f835cbaaaafa1' },
        { typeBack: 'text', typeFront: 'img', back: 'Swan', front: 'https://d9np3dj86nsu2.cloudfront.net/image/dcc934655ce17a44604b0a75ecdf0fb2' },
        { typeBack: 'text', typeFront: 'img', back: 'Wren', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fa31092806461b5fc3d831f9effd86c1' },
        { typeBack: 'text', typeFront: 'img', back: 'Chicken', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8fb84088d27f1281441f0f03f515b8cd' },
        { typeBack: 'text', typeFront: 'img', back: 'Hen', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2170f61563a02742807daba93c4638ba' },
        { typeBack: 'text', typeFront: 'img', back: 'Turkey', front: 'https://d9np3dj86nsu2.cloudfront.net/image/5c7dfcc6cb71ce06592005744de24d15' },
        { typeBack: 'text', typeFront: 'img', back: 'Pigeon', front: 'https://d9np3dj86nsu2.cloudfront.net/image/39f42ccdfb6da13f21a9c5c6222c4d29' },
        { typeBack: 'text', typeFront: 'img', back: 'Dove', front: 'https://d9np3dj86nsu2.cloudfront.net/image/f3d0b731f8ff1dcb3be23ea3e361b1bd' },
        { typeBack: 'text', typeFront: 'img', back: 'Hummingbird', front: 'https://d9np3dj86nsu2.cloudfront.net/image/d861c1870d365b09fa84381412cb9335' },
        { typeBack: 'text', typeFront: 'img', back: 'Owl', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8a7907739579128f58cd41f59b5b500c' },
        { typeBack: 'text', typeFront: 'img', back: 'Crane', front: 'https://d9np3dj86nsu2.cloudfront.net/image/5f5d6988e55041dd862768fcfb41afe6' },
        { typeBack: 'text', typeFront: 'img', back: 'Crow', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1561febd244fe2c14b12b172e486ee04' },
        { typeBack: 'text', typeFront: 'img', back: 'Heron', front: 'https://d9np3dj86nsu2.cloudfront.net/image/46f5666a10292c99a3f367a63c59984c' },
        { typeBack: 'text', typeFront: 'img', back: 'Kingfisher', front: 'https://d9np3dj86nsu2.cloudfront.net/image/46f5666a10292c99a3f367a63c59984c' },
        { typeBack: 'text', typeFront: 'img', back: 'Sparrow', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7e7a439c357743fb4acd0e9bbbe9af00' },
        { typeBack: 'text', typeFront: 'img', back: 'Pelican', front: 'https://d9np3dj86nsu2.cloudfront.net/image/b60847cda60334121abab1d022ead6b4' },
        { typeBack: 'text', typeFront: 'img', back: 'Albatross', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6b1d8904a2a30a5db942ad13334c8bc0' },
        { typeBack: 'text', typeFront: 'img', back: 'Stork', front: 'https://d9np3dj86nsu2.cloudfront.net/image/cebc3ba87095d531e42b024540f32f9a' },
      ]
    },
    { title:"Foods", id:"2",
      content: [
        { typeBack: 'text', typeFront: 'img', back: 'apple', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7c97a2f4d56398fd4898cfa32e7fa505' },
        { typeBack: 'text', typeFront: 'img', back: 'banana', front: 'https://d9np3dj86nsu2.cloudfront.net/image/45580cb077e1ebfed82f21c4815a0bd9' },
        { typeBack: 'text', typeFront: 'img', back: 'burger', front: 'https://d9np3dj86nsu2.cloudfront.net/image/d7111ea329e3ecada077e23947a2492b' },
        { typeBack: 'text', typeFront: 'img', back: 'cake', front: 'https://d9np3dj86nsu2.cloudfront.net/image/73aa3e8ff79bfb664606134044671518' },
        { typeBack: 'text', typeFront: 'img', back: 'carrots', front: 'https://d9np3dj86nsu2.cloudfront.net/image/aa3a72f5b0846dfd76254893573cd737' },
        { typeBack: 'text', typeFront: 'img', back: 'cheese', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3f8dfcc3245122ce30ae6294c5176164' },
        { typeBack: 'text', typeFront: 'img', back: 'chocolate', front: 'https://d9np3dj86nsu2.cloudfront.net/image/91a64584e8efd403ee94538ac4649f09' },
        { typeBack: 'text', typeFront: 'img', back: 'corn', front: 'https://d9np3dj86nsu2.cloudfront.net/image/10f5f99c1e3cf75da12250d2f40c12cf' },
        { typeBack: 'text', typeFront: 'img', back: 'eggs', front: 'https://d9np3dj86nsu2.cloudfront.net/image/4a8696f5b8926cae546b5be055292abb' },
        { typeBack: 'text', typeFront: 'img', back: 'fish', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0eb308f31b1eadce3a346b14fe3a6465' },
        { typeBack: 'text', typeFront: 'img', back: 'fruit', front: 'https://d9np3dj86nsu2.cloudfront.net/image/bccdfacf316ae2cc3921d97a4091d1cd' },
        { typeBack: 'text', typeFront: 'img', back: 'ham', front: 'https://d9np3dj86nsu2.cloudfront.net/image/38ff87cd8358412dd846f78c99325ab8' },
        { typeBack: 'text', typeFront: 'img', back: 'ice-cream', front: 'https://d9np3dj86nsu2.cloudfront.net/image/3a4a4797ae49fc824fd36cfc725ce1d0' },
        { typeBack: 'text', typeFront: 'img', back: 'meat', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6984f59948114acf4fd2c8cda99d0e01' },
        { typeBack: 'text', typeFront: 'img', back: 'milk', front: 'https://d9np3dj86nsu2.cloudfront.net/image/871e4c34cb21717a0a47645768fc0081' },
        { typeBack: 'text', typeFront: 'img', back: 'orange', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fb550fa1de2c6f9b2116ae6bc86e9c4e' },
        { typeBack: 'text', typeFront: 'img', back: 'pancakes', front: 'https://d9np3dj86nsu2.cloudfront.net/image/c1e2ed1a028c44e2bdc98996ad1c1b4e' },
        { typeBack: 'text', typeFront: 'img', back: 'peas', front: 'https://d9np3dj86nsu2.cloudfront.net/image/a9986634ca4e6c5a48934832802a26c6' },
        { typeBack: 'text', typeFront: 'img', back: 'pie', front: 'https://d9np3dj86nsu2.cloudfront.net/image/fd0e88a9184fa1ff62c806582e2bfa8f' },
        { typeBack: 'text', typeFront: 'img', back: 'pizza', front: 'https://d9np3dj86nsu2.cloudfront.net/image/2f273cf3eb0581d4156df47ecf36e570' },
    
      ]
    },
    { title:"Animal", id:"3",
      content: [
        { typeBack: 'text', typeFront: 'img', back: 'Elephante', front: 'https://d9np3dj86nsu2.cloudfront.net/image/c7f32bc724ab723a65a18ac584dd4d9e' },
        { typeBack: 'text', typeFront: 'img', back: 'Perro', front: 'https://d9np3dj86nsu2.cloudfront.net/image/9bdb5b45739754e85e0ead381b5bf106' },
        { typeBack: 'text', typeFront: 'img', back: 'Gato', front: 'https://d9np3dj86nsu2.cloudfront.net/image/712192b186cff6c6933e823d68d80c6f' },
        { typeBack: 'text', typeFront: 'img', back: 'Tortuga', front: 'https://d9np3dj86nsu2.cloudfront.net/image/a3d0ec8230c748b6ac050caa90648e47' },
        { typeBack: 'text', typeFront: 'img', back: 'Pato', front: 'https://d9np3dj86nsu2.cloudfront.net/image/0419435b0d8876960185377ef5df4483' },
        { typeBack: 'text', typeFront: 'img', back: 'Cabollo', front: 'https://d9np3dj86nsu2.cloudfront.net/image/6619fd92143ea09ab2cd1dd816d42631' },
        { typeBack: 'text', typeFront: 'img', back: 'La Vaca', front: 'https://d9np3dj86nsu2.cloudfront.net/image/7933a9576095b4cf22fe426091502df6' },
        { typeBack: 'text', typeFront: 'img', back: 'El Pez', front: 'https://d9np3dj86nsu2.cloudfront.net/image/93cbe99ee87a9259761a2770296326c2' },
        { typeBack: 'text', typeFront: 'img', back: 'El Leon', front: 'https://d9np3dj86nsu2.cloudfront.net/image/30dc2774a4318c0b7b24fea90a1802b9' },
        { typeBack: 'text', typeFront: 'img', back: 'El Buho', front: 'https://d9np3dj86nsu2.cloudfront.net/image/e59667d69e0b1b99adc6e402da25d6c2' },
        { typeBack: 'text', typeFront: 'img', back: 'El Cerdo', front: 'https://d9np3dj86nsu2.cloudfront.net/image/8041a85ca6a4a9bdf9bc2540490cf657' },
        { typeBack: 'text', typeFront: 'img', back: 'La Foca', front: 'https://d9np3dj86nsu2.cloudfront.net/image/996fb2c6834e9d77fc3035d5121ab178' },
        { typeBack: 'text', typeFront: 'img', back: 'La Arana', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1350deb8b67ff609206ffdd44e48cceb' },
        { typeBack: 'text', typeFront: 'img', back: 'El Lobo', front: 'https://d9np3dj86nsu2.cloudfront.net/image/1049db3f28a8da1938d8c2f8c9047fc2' },
        { typeBack: 'text', typeFront: 'img', back: 'La Cebra', front: 'https://d9np3dj86nsu2.cloudfront.net/image/29e37ce995e6369791cebc54ec31345e' },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
