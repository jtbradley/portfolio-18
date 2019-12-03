
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
                  },
                  nchAnbConsultation: {
                      title: 'NCH - Consultation',
                      img: 'nch-anb-consultation.jpg',
                      type: 2,
                      url: 'https://nchinc.com/free/anb-consultation'
                      
                  },
                   nchNvEdge: {
                      title: 'NCH - Nevada Edge',
                      img: 'nv-edge-state-comparison.jpg',
                       type: 2,
                       url: 'https://nchinc.com/state-comparison/delaware'
                  },

                closerSchool: {
                    title: 'Closer School',
                    img: 'closer-school.jpg',
                     type: 0,
                     url: 'https://www.closerschool.com'
                },

                  nchAnb2: {
                      title: 'NCH - 2016 Formation',
                      img: 'anb-drip-2.jpg',
                      type: 3,
                      url: 'old-emails/eoy-4.html'
                  },
          
                  iaBehalf: {
                      title: 'Inc Authority - Behalf Partner',
                      img: 'IA-behalf-email.jpg',
                      type: 3,
                      url: 'old-emails/ia-behalf.html'
                  },
                  
                  nchNvEdgeEmail: {
                      title: 'NCH - Nevada Edge Email',
                      img: 'nch-nv-edge-email.jpg',
                       type: 3,
                      url: 'old-emails/Cort-Christie-NV-Edge.html'
                  },
          
                  csc: {
                      title: 'Corporate Service Center, Inc.',
                      img: 'csc.jpg',
                      type: 0,
                      url: 'http://www.corporateservicecenter.com/'
                  },
/*
                  lotrTrivia: {
                    title: 'Lord of the Rings Trivia',
                    img: 'lotr-quiz.jpg',
                    type: 1,
                    url: 'http://nchinc.net/jb-dev/lotr-quiz/'
                    
                },
               */   
                  harrisLaw: {
                      title: 'Harris Law',
                      img: 'harris-law2.jpg',
                      type: 1,
                      url: 'https://jtbradley.github.io/702-law/'
                  },

                  laraChat: {
                    title: 'Everbrand Agency (coming soon)',
                    img: 'evb-screen.jpg',
                    type: 1,
                    url: 'https://everbrand.co'
                    
                }
              },
  
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