module.exports = {


  friendlyName: 'Search',

  description: 'Search words.',

  inputs: {

    word: {
        type: 'string',
      }

  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'frontend/search'
    },
    redirect: {
        responseType: 'redirect'
      }
  },


  fn: async function (inputs, exits) {


      var get_word_search = inputs.word

      var page_title = 'Rakuji';
      var page_slug = 'index';

      
      if( get_word_search == undefined || get_word_search == null || get_word_search == ''  ){
        
        throw {redirect: '/'};

      }else{

            var keyword = await sails.helpers.frontend.filterWords.with({word_filter:get_word_search})
          
            var wordcheck = await sails.helpers.frontend.checkWords.with({word_check:keyword})
            console.log(wordcheck)

           
            var result_get_hiragana = new Array()
            var result_get_katakana = new Array()
            var result_get_romaji = new Array()
            var result_get_kanji_word = new Array()
            var result_get_kanji = new Array()
            var result_get_mean = new Array()
            var result_search = new Array()

            var w_search = wordcheck.word_search

            if (wordcheck.hiragana.isset = 1 && wordcheck.hiragana.word != '') {
                  result_get_hiragana = await sails.helpers.frontend.findHiragana.with({word_hiragana:w_search})
            }

            if (wordcheck.katakana.isset = 1 && wordcheck.katakana.word != '') {
                result_get_katakana = await sails.helpers.frontend.findKatakana.with({word_katakana:w_search})
            }

            if (wordcheck.romaji.isset = 1 && wordcheck.romaji.word != '') {
              result_get_romaji = await sails.helpers.frontend.findRomaji.with({word_romaji:w_search})
           }

             if (wordcheck.vi.isset = 1 && wordcheck.vi.word != '') {
               result_get_mean = await sails.helpers.frontend.findMean.with({word_mean:w_search})
             }

             if (wordcheck.kanji.isset = 1 && wordcheck.kanji.word != '') {
              result_get_kanji_word = await sails.helpers.frontend.findKanjiWord.with({word_kanji:w_search})
              result_get_kanji = await sails.helpers.frontend.findKanji.with({kanji:wordcheck.kanji.word})
             }


            result_search = await [].concat(result_get_hiragana, result_get_katakana, result_get_romaji, result_get_kanji_word, result_get_mean)

            // console.log(result_get_kanji)

            var data_words = {
              data_words_json: JSON.stringify(result_search),
              data_kanjis_json: JSON.stringify(result_get_kanji),
              page_title: page_title,
              page_slug: page_slug
            }
    
            return exits.success(data_words)

      }


  }


};
