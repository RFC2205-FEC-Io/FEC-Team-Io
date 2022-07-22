import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import _, { groupBy } from 'underscore';
import { Container, Navbar } from 'react-bootstrap';
import './Components/RelatedProductsCarouselComponent/RelatedProductStyles.css';
import RelatedProductsCarousel from './Components/RelatedProductsCarouselComponent/RelatedProductsCarousel.jsx';
import YourOutfitCarousel from './Components/YourOutfitCarouselComponent/YourOutfitCarousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComparisonModalWindow from './Components/ComparisonModalComponent/ComparisonModalWindow.jsx';
import RelatedProductsBanner from './Components/RelatedProductsCarouselComponent/RelatedProductsBanner.jsx';



const RPP = (props) => {
    /*State*/
    const [index, setIndex] = useState(0);
    const [currentProductId, setCurrentProductId] = useState(props.product_id);
    //const [yourOutfitProductIds, setYourOutfitProductIds] = useState();
    //const [relatedProductCardId, setRelatedProductCardId] = useState();
    const [relatedProductsInfoSummaries, setRelatedProductsInfoSummaries] = useState([]);
    const [yourOutfitProductsInfoSummaries, setYourOutfitProductsInfoSummaries] = useState([]);
    const [relatedProductCardInfo, setRelatedProductCardInfo] = useState({});
    const [currentProductCardInfo, setCurrentProductCardInfo] = useState({});
    const [comparisonCardFeatures, setComparisonCardFeatures] = useState({});
    const [currentCardFeatures, setCurrentCardFeatures] = useState({});
    const [relatedCardFeatures, setRelatedCardFeatures] = useState({});
    const [show, setShow] = useState(false);


    /*Helper functions */
   useEffect(() => {
    const fetchData =  async () => {
      const data =  await getAllData();
      setRelatedProductsInfoSummaries(data);
    };
    fetchData();
   }, [currentProductId]);

   const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    /*This is a function for mapping when the iteratee is asynchronous (like axios requests)*/
  const mapInBatches = (array, iteratee, batchSize) => {
    const batches = _.groupBy(array, (_v, i) => Math.floor(i/batchSize));
    return Object.values(batches).reduce(async (memo, batch) => [
      ...(await memo),
      ...(await Promise.all(batch.map(iteratee)))
    ], []);
  };


  const ResetCurrentProductId = (newId) => {
    setCurrentProductId(newId)
  }

  const StarClickHandler = (CardId) => {
    const fetchCardInfo = async () => {
      /*Wait until getTwoComparisonCardsInfo function completes */
      const cardInfo = await getTwoComparisonCardsInfo (currentProductId, CardId);


      /*Create an array with a list of all features from both products being compared */
      const comparisonCardFeaturesArray = [];
      const currentCardFeatures = cardInfo[0].features;
      const relatedCardFeatures = cardInfo[1].features;

      for (let i = 0; i < currentCardFeatures.length; i++) {
        if (comparisonCardFeaturesArray.indexOf(currentCardFeatures[i].feature) === -1) {
          comparisonCardFeaturesArray.push(currentCardFeatures[i].feature)
        }
      }

      for (let i = 0; i < relatedCardFeatures.length; i++) {
        if (comparisonCardFeaturesArray.indexOf(relatedCardFeatures[i].feature) === -1) {
          comparisonCardFeaturesArray.push(relatedCardFeatures[i].feature)
        }
      }


      const currentFeatures = {};
      for (let i = 0; i < currentCardFeatures.length; i++) {
        currentFeatures[currentCardFeatures[i].feature] = currentCardFeatures[i].value;
      }

      const relatedFeatures = {};
      for (let i = 0; i < relatedCardFeatures.length; i++) {
        relatedFeatures[relatedCardFeatures[i].feature] = relatedCardFeatures[i].value;
      }

      setCurrentProductCardInfo(cardInfo[0]);
      setRelatedProductCardInfo(cardInfo[1]);
      setComparisonCardFeatures(comparisonCardFeaturesArray);
      setCurrentCardFeatures(currentFeatures);
      setRelatedCardFeatures(relatedFeatures);
      setShow(true)
    }
    fetchCardInfo();
  }



  const WindowClickHandler = (event) => {
    setShow(false)
  }

  const getTwoComparisonCardsInfo = (idNumCurrent, idNumRelated) => {
    var currentCardInfo = {};
    var relatedCardInfo = {};
    relatedProductsInfoSummaries.map((product) => {
      if (product.id === idNumCurrent) {
        currentCardInfo = product;
      } else if (product.id === idNumRelated) {
        relatedCardInfo = product;
      }
    })
    var comparisonCards = [];
    comparisonCards.push(currentCardInfo);
    comparisonCards.push(relatedCardInfo);
    return comparisonCards;
  };

const AddCardClickHandler = (event) => {
  console.log('Add card to outfit was clicked')
  var newOutfitArray = [];
  console.log('yourOutfitProductsInfoSummaries: ', yourOutfitProductsInfoSummaries)
  newOutfitArray.push(yourOutfitProductsInfoSummaries)
  relatedProductsInfoSummaries.map((product) => {
    if (product.id === currentProductId) {
      newOutfitArray.push(product)
    }
  })
  setYourOutfitProductsInfoSummaries(newOutfitArray);
}

 const XIconButtonClickHandler = (event) => {
  console.log("X Icon Button was clicked.")
 }

  //-------- Get requests -----------------//

  /* Get related products ids */
  const getAllData = () => {
    var infoSummary = [];
    return axios.get(`/related/?product_id=${currentProductId}`)
    .then(response => {
      const relatedIds = response.data;
      relatedIds.push(props.product_id);
      return relatedIds;
    })
    /* Get related products by their ids */
    .then(response => {
      const relatedProductArray = mapInBatches(response, async (id) => {
        return axios.get(`/products/?product_id=${id}`);
      }, 4)
      return relatedProductArray;
    })
    /* Add related products (array of objs) to state */
    .then(response => {
      const newArr = infoSummary;
      for (var i = 0; i < response.length; i++) {
        newArr.push(response[i].data);
      }
      infoSummary = newArr;
      return response.map(obj => obj.data.id);
    })
    /* Get related styles by their ids */
    .then(response => {
      const relatedStylesArray = mapInBatches(response, async (id) => {
        return axios.get(`/relatedStyles/?product_id=${id}`);
      }, 4)
      return relatedStylesArray;
    })
    /* Add related styles  to state */
    .then(response => {
      const newArr = infoSummary;
      for (var i = 0; i < response.length; i++) {
        newArr[i]['styles'] = response[i].data.results;
      }
      infoSummary = newArr;
      return response.map(obj => obj.data.product_id);
    })
     /* Get products' meta review info by their ids */
     .then(response => {
      const relatedMetaReviewsArray = mapInBatches(response, async (id) => {
        return axios.get(`/relatedMetaReviews/?product_id=${id}`);
      }, 4)
      return relatedMetaReviewsArray;
    })
    /*Average the ratings for each related item*/
    .then(response => {
      const productRatingsByIds = {};
      response.map(obj => productRatingsByIds[obj.data.product_id] = obj.data.ratings)
      return productRatingsByIds
    })
    /*Average the rating of each product id */
    .then(response => {
      const productAverageRatingById = {};
        for(var id in response) {
          const totalNumberOfRatings = 0;
          const totalSumOfRatings = 0;
          for (var rating in response[id]) {
            totalNumberOfRatings +=  Number(response[id][rating]);
            totalSumOfRatings += Number(response[id][rating]) * Number(rating);
          }
          const averageRating = totalSumOfRatings / totalNumberOfRatings;
          productAverageRatingById[id] = averageRating;
        }
      return productAverageRatingById;
    })
    /*Add product average rating by id to state*/
    .then(productAverageRatingById => {
      const newArr = infoSummary;
      for (var i = 0; i < newArr.length; i++) {
        newArr[i]['averageRating'] = productAverageRatingById[newArr[i].id]
        }
      //setAverageProductRatingById(response)
      infoSummary = newArr;
      return infoSummary;
    })
    .catch(err => {
      console.log('CLIENT SIDE getRelatedProductIds ERROR: ', err)
    })
  }

//---------------------- RENDER ------------------------------------------------------//


    return (
      <div className="RPP" style={{ display: "flex", flexDirection: "column" }}>
          <RelatedProductsCarousel
            relatedProductsInfoSummaries={relatedProductsInfoSummaries}
            StarClickHandler={StarClickHandler}
            CardClickHandler={props.CardClickHandler}
            ResetCurrentProductId={ResetCurrentProductId}
            index={index}
            handleSelect={handleSelect}
            />
         {/* <YourOutfitCarousel
             yourOutfitProductsInfoSummaries={yourOutfitProductsInfoSummaries}
             XIconButtonClickHandler={XIconButtonClickHandler}
             AddCardClickHandler={AddCardClickHandler}
    */}
        <Container>
          <ComparisonModalWindow
          WindowClickHandler={WindowClickHandler}
          relatedProductCardInfo={relatedProductCardInfo}
          currentProductCardInfo={currentProductCardInfo}
          comparisonCardFeatures={comparisonCardFeatures}
          currentCardFeatures={currentCardFeatures}
          relatedCardFeatures={relatedCardFeatures}
          show={show} />
       </Container>
      </div>
    );
};

export default RPP;