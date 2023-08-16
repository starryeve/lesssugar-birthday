export interface StageContent {
  imgUrl: string
  title: string
  description: string,
  btnUrl: string
}
export const stagesContent: StageContent[] = [
  {
    imgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png',
    title: 'Let’s make a cake!',
    description: 'Since it’s your birthday, I find it only fitting that you get to make your own digital birthday cake. Start by making your cake mixture, then bake it in a digital oven and finally decorate. Have fun and happy birthday',
    btnUrl: 'Okay, Let‘s go'
  },
  {
    imgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png',
    title: 'Mix successful!',
    description: 'Congratulations, the mixture is perfect! After pouring the mixture into a baking tin, it’s now time to put it in our digital oven for about 3 seconds. That should be enough time for a nice spongy base.',
    btnUrl: 'Okay, Let‘s go'
  },
  {
    imgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png',
    title: 'Bake successfull!',
    description: 'Yes! You are a master chef. The base is fully baked and looks super yummy. Now its time to combine this base with lots of other ingredients like jam, marmalade, chocolate and more.',
    btnUrl: 'Okay, Let‘s go'
  },
]

export interface SeasonOption<T = 'base' | 'filling'> {
  color: string
  name: string,
  type: T
}
export const baseOptions: SeasonOption<'base'>[] = [
  {
    color: '#ffd296',
    name: 'Vanilla',
    type: 'base',
  },
  {
    color: '#ff99a3',
    name: 'Pink',
    type: 'base',
  },
  {
    color: '#d5ccb2',
    name: 'Fruit',
    type: 'base',
  }
]
export const fillingOptions: SeasonOption<'filling'>[] = [
  {
    color: '#e75656',
    name: 'Jam',
    type: 'filling',
  },
  {
    color: '#ffffff',
    name: 'Cream',
    type: 'filling',
  },
  {
    color: '#9f3d28',
    name: 'Choc',
    type: 'filling',
  },
  {
    color: '#e8e086',
    name: 'Lemon',
    type: 'filling',
  }
]