const swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  disableScroll: true, // [5]
  disableFocus: false, // [6]
  awaitCloseAnimation: false, // [7]
  debugMode: true // [8]
});

const modal = document.querySelector('.modal__container');

for (let i = 1; i < 9; i++) {
  const button = document.querySelector(`#modal-launcher-${i}`);
  button.addEventListener('click', function() {
    const content = `
    <div class="person-info" id="info-1">
    <img src=${team[i - 1].image} alt="" />
    <h2 class="person-name">${team[i - 1].name}</h2>
    <p class="person-title">${team[i - 1].title}</p>
  </div>

  <div class="person-detail">
    <p class="lead">
     ${team[i - 1].description}
    </p>
  </div>
  `;
    modal.insertAdjacentHTML('afterbegin', content);
    MicroModal.show('modal-1', {
      onClose: modal => {
        const el = document.querySelector('#info-1').parentElement;
        if (el) {
          while (el.firstChild) {
            el.removeChild(el.firstChild);
          }
        }
      }
    });
  });
}

// var button = document.querySelector('#modal-launcher-2');
// button.addEventListener('click', function() {
//   MicroModal.show('modal-1');
// });

const team = [
  {
    name: 'David Le',
    title: 'Managing Partner',
    description:
      'David has more than 15 years’ diverse real estate experience and has served as the fund manager overseeing more than $50M of real estate transactions. As an entrepreneur from an early age, David possesses natural business acumen. While still in college, he launched two successful businesses and achieved successful capital raising and exits. David has worked both internationally and domestically in commercial development, residential lending, and fund management.',
    image: 'img/team/david.webp'
  },

  {
    name: 'Minh Le',
    title: 'Board of Director',
    description:
      'An entrepreneur and business owner for over 22 years in real estate development and investment acquisition, Minh Le has proven experience representing clients, financial institutions, and private investors. As a Chair member at Redwoods Capital (RWS), Minh Le is responsible for all aspects of Strategic Acquisitions and Client Relations for Vietnam market to keep the operation goals in line with the long-term vision of RWS. He seeks out and identifies new acquisition opportunities while working to enhance investor relationships.',
    image: 'img/team/minh-le.webp'
  },
  {
    name: 'Andy Le',
    title: 'Acquisition Partner',
    description:
      'Andy Le is responsible for transactions across all property types (multifamily, office, residential) at Redwoods Capital. Mr. Le focuses on identifying opportunities for added value. Prior to joining Redwoods Capital, Andy worked for JP Morgan Chase Bank where he provided high level financial advisory to his clients through customized securities portfolios and strategic planning.',
    image: 'img/team/andy-le.webp'
  },
  {
    name: 'Sean Mcferson',
    title: 'CPA / MBT',
    description:
      'Sean has more than 19 years of experience in public accounting and is a partner in the firm’s Tax & Accounting Services department. He specializes in domestic and international taxation issues for multinational companies (both public and private) and start-up companies, including domestic and international restructuring, consultation on year-end and quarterly income tax provisions, tax-efficient integration of acquired targets, and US inbound and outbound tax planning. Sean has also worked in London for PricewaterhouseCoopers LLP. He is a current member of Baker Tilly International Tax Committee.',
    image: 'img/team/sean.webp'
  },
  {
    name: 'Kim Lisa Taylor',
    title: 'SEC Attorney',
    description:
      'Kim Lisa Taylor is a California and Florida licensed attorney and founding attorney in the Corporate Securities law firm of Syndication Attorneys, PLLC. Her law firm sets up private placement offerings and syndications nationwide under federal law, and intrastate offerings in California and Florida. She helps her clients with legal documents, structures, and entities for real estate transactions and small business startups. She frequently speaks in public forums on corporate securities laws.',
    image: 'img/team/lisa.webp'
  },
  {
    name: 'Clint coons',
    title: 'Asset Protection Lawyer',
    description:
      'Clint Coons is first a successful entrepreneur, second, an active real estate investor and third, a licensed attorney and legal author of numerous books and articles on asset protection and planning. As an attorney, he deals primarily with the areas of asset protection, estate planning, and tax reduction. Simply put, he assists people with overcoming the obstacles of lawsuits, income taxes, and death taxes. He works with individuals all across the country extensively sharing his strategies with real estate investors as well those involved in various high risk professions and small businesses. Through his innovative and dynamic strategies, he has helped thousands of people save millions.',
    image: 'img/team/clint.webp'
  },
  {
    name: 'Joy C. Chang',
    title: 'Wealth Management Attorney',
    description:
      'Joy Chang is an international estate planning attorney with Withers Bergman, LLP, who assists foreign investors with their estate and tax planning needs.  Joy counsels domestic and international families on cross-border issues, including estate and tax planning structures for foreign investors investing in the United States. She advises clients with assets that are located in multiple jurisdictions or those with cross-border interests or beneficiaries, and counsels individuals planning to enter or leave the United States. Joy also provides tax compliance advice for persons with foreign trusts, foreign bank accounts, or other foreign assets and entities, including advice regarding participation in the offshore voluntary disclosure or streamlined disclosure programs.  Joy works with other specialists at Withers Bergman to provide comprehensive planning for clients, incorporating immigration planning, estate and tax planning, and real estate investment or corporate structures.',
    image: 'img/team/joy.webp'
  },
  {
    name: 'Stephen Wilson',
    title: 'Real Estates Attorney',
    description:
      'Steve is a 45-year real estate and business attorney with Withers Bergman, LLP, and is a key consultant to our company.  He has deep experience in both real estate syndication and cross-border transactions, particularly with Asian investors.  In recent years he has participated in economic teams visiting both Vietnam and Indonesia on official visits.   He also has substantial experience in corporate, general business and non profit law. In the highly-competitive West Coast real estate environment, he adds value to clients by providing the business judgment and perspective that a seasoned institutional real estate executive would provide. Much of his current professional focus is on complex, value-added urban mixed-use projects and joint ventures. Significant capabilities include entity formation/asset management for portfolio owners, restructuring and securitization of holdings, entitlement work, purchases and sales, commercial leasing, title matters and real estate tax issues.  His recent representation has included specific matters for Vietcom Bank and Vietnam Airlines. Steve frequently collaborates with partners from his firm’s estate planning/wealth planning and immigration law departments in order to create comprehensive solutions for clients.',
    image: 'img/team/stephen.webp'
  }
];

console.log('connected...');
