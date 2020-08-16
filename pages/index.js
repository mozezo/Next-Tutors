import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchArea from '../containers/Home/Search/Search';
import LocationGrid from '../containers/Home/Location/Location';
import GetAPIData from '../services/helpers/get_api_data';

export default function Home({locationData}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchArea />
      <LocationGrid data={locationData} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: 'location',
      name: 'locationData',
    }
  ];
  const pageData = await GetAPIData(apiUrl);
  let locationData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === 'locationData') {
        locationData = item.data ? [...item.data] : [];
      } 
    });
  }
  return {
    props: { locationData },
  };
}
