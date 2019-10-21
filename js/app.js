
var thumbs = new Vue({
    el: '#thumbs',
    data: {
        
      path: 'img/thumbnails/',

      projectTypes: [ 'Website', 'Web App', 'Landing Page', 'Email'],
        
      projects: {

                  epicRei: {
                      title: 'Epic Capital Solutions - Real Estate Investing',
                      img: 'epic-rei.jpg',
                      type: 2,
                      url: 'https://www.epiccapitalsolutions.com/rei-lp'
                  },/*
                  123: {
                      title: '123 Bizplan',
                      img: '123-bizplan.jpg',
                      type: 2,
                      url: 'http://nchinc.net/jb-dev/123biz-lp/'
                  },*/
                  epicGetQuote2: {
                      title: 'Epic Capital Solutions - Get Quote',
                      img: 'epic-get-quote-2.jpg',
                      type: 2,
                      url: 'https://www.epiccapitalsolutions.com/get-quote-2'
                  },

                  nchAnbConsultation: {
                      title: 'NCH - Consultation',
                      img: 'nch-anb-consultation.png',
                      type: 2,
                      url: 'https://nchinc.com/free/anb-consultation'
                      
                  },
                
                   nchNvEdge: {
                      title: 'NCH - Nevada Edge',
                      img: 'nv-edge-state-comparison.jpg',
                       type: 2,
                       url: 'https://nchinc.com/state-comparison/delaware'
                  },
          
                  epicAffiliate: {
                      title: 'Epic Capital Solutions - Affiliate',
                      img: 'epic-affiliate.png',
                       type: 2,
                       url: 'https://www.epiccapitalsolutions.com/affiliate-lp'
                  },

                  nchGuidant: {
                    title: 'NCH - Guidant',
                    img: 'nch-guidant.png',
                     type: 2,
                     url: 'https://nchinc.com/more-info/guidant'
                },
                closerSchool: {
                    title: 'Closer School',
                    img: 'closer-school.png',
                     type: 0,
                     url: 'https://www.closerschool.com'
                },
         /*
variousAds: {
    title: 'Various Ads',
    img: 'various-ads.png',
    type: 2,
    url: 'http://nchinc.net/jb-dev/various-ads.html'
},
*/
                  sellersPlaybook: {
                      title: 'Sellers Playbook',
                      img: 'sellers-playbook.png',
                      type: 2,
                      url: 'https://nchinc.com/sellers-playbook'
                  },

                  nchRaf: {
                    title: 'NCH - Refer a Friend',
                    img: 'nch-raf.png',
                     type: 2,
                     url: 'https://nchinc.com/refer-a-friend'
                },
          
                  epicRestaurants: {
                      title: 'Epic Capital Solutions - Restaurants',
                      img: 'epic-restaurants.png',
                      type: 2,
                      url: 'https://www.epiccapitalsolutions.com/apply/restaurant/'
                  },

                  nchLoik: {
                    title: 'NCH - Loik Affiliate',
                    img: 'nch-loik.png',
                    type: 2,
                    url: 'http://www.nationalnch.com/start-your-business/'
                },
          
                  nchTurnkeyRei: {
                      title: 'NCH - Turnkey Real Estate Investment',
                      img: 'NCH-turnkey-rei.png',
                      type: 2,
                      url: 'https://nchinc.com/free/6-things-rei'
                  },

                  sellersPlaybookStart: {
                    title: 'Sellers Playbook - Start Store',
                    img: 'anb-sp.png',
                    type: 2,
                    url: 'https://nchinc.com/free/6-things-rei'
                },

                nchCad: {
                    title: 'NCH - CAD Division',
                    img: 'NCH-CAD.png',
                    type: 2,
                    url: 'https://nchinc.com/cad-division/vanlandingham.html'
                },

                  nchAnb2: {
                      title: 'NCH - 2016 Formation',
                      img: 'anb-drip-2.png',
                      type: 3,
                      url: 'old-emails/eoy-4.html'
                  },
          
                  iaBehalf: {
                      title: 'Inc Authority - Behalf Partner',
                      img: 'IA-behalf-email.jpg',
                      type: 3,
                      url: 'old-emails/ia-behalf.html'
                  },
          
                  nchAnbRei: {
                      title: 'NCH - Real Estate Investing',
                      img: 'anb-5-img.png',
                       type: 3,
                      url: 'old-emails/ANB-re.html'
                  },
                  
                  nchNvEdgeEmail: {
                      title: 'NCH - Nevada Edge Email',
                      img: 'nch-nv-edge-email.png',
                       type: 3,
                      url: 'old-emails/Cort-Christie-NV-Edge.html'
                  },
          
                  csc: {
                      title: 'Corporate Service Center, Inc.',
                      img: 'csc.jpg',
                      type: 0,
                      url: 'http://www.corporateservicecenter.com/'
                  },
          
                  anbDripOne: {
                      title: 'NCH - Incorporate in Nevada',
                      img: 'nv-google-drip.png',
                       type: 3,
                      url: 'old-emails/NV-Google-Drip-1.html'
                  },
         /*
                  hailBoutique: {
                      title: 'Hail Boutique',
                      img: 'hail-boutique.jpg',
                      type: 0,
                      url: 'https://hailboutique.com/'
                  },
*/
                  lotrTrivia: {
                    title: 'Lord of the Rings Trivia',
                    img: 'lotr-quiz.png',
                    type: 1,
                    url: 'http://nchinc.net/jb-dev/lotr-quiz/'
                    
                },
                  
                  harrisLaw: {
                      title: 'Harris Law',
                      img: 'harris-law2.jpg',
                      type: 1,
                      url: 'https://jtbradley.github.io/702-law/'
                  },

                  laraChat: {
                    title: 'Watch Site - GrahQL + Headless CMS (coming soon)',
                    img: '',
                    type: 1,
                    
                }
              },

  
              greeting1: 'Hello b!',
          
              greeting2: 'hello you',
  
              selectedType: 'type'
                 
        
    },
      methods: {
            alert: function(event){
                console.log(this.all);
            },
          
          showOverlay: function(event){
              console.log($(event.target));
              $(event.target.children[0]).css('opacity', '1');
              $(event.target.children[0]).css('height', '100%');
          },
          hideOverlay: function(event){
              $(event.target.children[0]).css('opacity', '0');
              $(event.target.children[0]).css('height', '0%');
          },
          filterByType: function(event){
              var parts =(event.target.href.split('/'));
              var uri = parts[parts.length -1];
              var type =  decodeURI(uri);
              this.selectedType = type;

          }
  
        }
  });