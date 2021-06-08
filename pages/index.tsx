import Head from 'next/head';
import MainLayout from '@components/layouts/MainLayout';
import Title from '@components/atoms/texts/Title';
import Paragraph from '@components/atoms/texts/Paragraph';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>@dalvaradotey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-10">
        <div className="col-start-1 col-end-4">
          prueba
        </div>
        <div className="col-start-4 col-end-10">
          <Title className="text-5xl">Mi nombre es Diego</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum vitae alias ipsum voluptatem consequuntur nostrum molestias deleniti quisquam ipsa blanditiis, hic fuga iusto ad eum veniam, error, autem at?</Paragraph>
        </div>
      </div>
    </MainLayout>
  )
}
