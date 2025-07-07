import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 6,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 7,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 8,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 10,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title='Завтрак'
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 6,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 7,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 8,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: 'Пицца Гавайская',
                    imageUrl: 'https://media.dodostatic.net/image/r:233x233/11ee7d617e9339cfb185921a343ad8fd.avif',
                    price: 550,
                    items: [
                      {
                        price: 550,
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

