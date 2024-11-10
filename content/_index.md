---
# Leave the homepage title empty to use the site title
title: ''
date: 2024-06-24
type: landing


sections:
  ############################
  - block: about.biography
    id: about
    content:
      title: <span style="color:#c70a30">About Me</span>
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin

  - block: collection 
    id : working-papers
    content:
      title: Working Papers
      filters:
        folders:
          - wps

      text: |-
          <div style="margin-top: 15px;">
          </div>

          <style>
            .custom-text {
              margin-bottom: 1px; 
              font-size : 1.2em;
              font-weight: bold;
            }
          </style>

          <style>
            .custom-abstr {
              margin-bottom: 1px; 
              font-size :0.9em;
              font-weight: 500; 
              color: grey;
            }
          </style>          

          <style>
            .custom-auth {
              margin-bottom: 1px; 
              font-size :0.9em;
            }
          </style>     

          <style>
            .custom-status {
              margin-bottom: 1px; 
              font-size :0.9em;
              color : #c70a30;
               font-weight: 600;
               font-style: italic;
            }
          </style>   

          <style>
            .custom-button {
              margin-bottom: 1px; 
              font-size :0.9em;
              color : #c70a30;
               font-weight: 400;
            }
          </style>   


          <div class="custom-text">
          Supply Shocks and Household Heterogeneity in Open Economies: Implications <br> for Optimal Monetary Policy [November 2024]
          </div>
          <div class="custom-abstr">
          Abstract: I study the transmission of cost-push shocks in a small open economy using a Heterogeneous 
          Agent New Keynesian (HANK) model. Compared to the canonical
          Representative Agent New Keynesian (RANK) model, I show that a HANK model
          with empirically realistic marginal propensities to consume out of income (MPCs)
          and sticky wages introduces an additional transmission channel: An increase in
          inflation following a cost-push shock suppresses real wages, which suppress aggregate 
          demand when the MPC out of labor income is greater than the MPC out
          of profits, highlighting the distributional role of inflation. I then compute the op-
          timal monetary policy response to an increase in import prices. I find that a more
          hawkish response is optimal in HANK compared to RANK. This is driven by low
          short-run trade elasticities combined with positive exchange rate pass-through to
          import prices, implying that an exchange rate appreciation can stabilize inflation
          and real wages without significantly lowering domestic employment.
          </div>
          <a href="files/research/HANK_supply.pdf" style="color: #c70a30; font-weight: 600;">[PDF]</a> 

          <div style="height: 25px;"></div>


          <div class="custom-text">
          Fiscal Multipliers in Small Open Economies With Heterogeneous Households [August 2024]
          </div>
          with
          <span class="JeppeDruedahl"></span>, 
          <span class="SørenHoveRavn"></span>, 
          <span class="LauraSunderPlassmann"></span>, 
          and <span class="JacobMarottSundram"></span>

          <div class="custom-status"> R&R at IMF Economic Review </div>

          <div class="custom-abstr">
          Abstract: We study fiscal multipliers in a small open economy Heterogeneous Agent New-Keynesian (SOE-HANK) model. We provide a set of equivalence results under which the fiscal multiplier in our SOE-HANK model is the same---at any horizon---as in a corresponding representative-agent (RANK) model. Under more general assumptions, the fiscal multipliers in the two models are not equivalent, but remain relatively similar. Yet, we show that the underlying channels driving the fiscal multipliers differ substantially. In particular, consumption increases while net exports tend to decline in the HANK model, whereas the opposite is true in the RANK model.
          </div>
          <a href="files/research/Fiscal_IHANK_August2024.pdf" style="color: #c70a30; font-weight: 600;">[PDF]</a> <a href="files/research/Fiscal_IHANK_IMFER.pdf" style="color: #c70a30; font-weight: 600;">[Slides]</a>   </a>  

          <div style="height: 25px;"></div>

          <div class="custom-text">
          The Transmission of Foreign Demand Shocks [September 2024]
          </div>
          with
          <span class="JeppeDruedahl"></span>, 
          <span class="SørenHoveRavn"></span>, 
          <span class="LauraSunderPlassmann"></span>, 
          and <span class="JacobMarottSundram"></span>

          <div class="custom-status"> Submitted </div>

          <div class="custom-abstr">
          Abstract: Introducing heterogeneous households into a New Keynesian model of a
          small open economy enables the model to fit a set of stylized empirical facts
          about the transmission of foreign demand shocks. In the absence of a strong
          labor income effect on consumption, the model counterfactually implies that
          domestic consumption decreases as the central bank raises the interest rate to
          curb domestic inflation. With plausible marginal propensities to consume, the
          model instead produces the observed increase in domestic consumption of both
          tradeable and non-tradeable goods. This implies that foreign demand shocks are
          more important for international business-cycle comovement than predicted by
          existing models. Our findings also have implications for stabilization policies:
          While monetary policy is well-suited to counteract foreign demand shocks, tra-
          ditional fiscal policies are inadequate, as they do not provide sufficient stimulus
          to the tradeable sector. This poses a particular challenge for countries with a
          fixed exchange rate or in a monetary union.
          </div>
          <a href="files/research/Foreign_Demand_Shocks_September2024.pdf" style="color: #c70a30; font-weight: 600;">[PDF]</a> <a href="files/research/Foreign_Demand_Shocks_October2022.pdf" style="color: #c70a30; font-weight: 600;">[2022 WP]</a>  <a href="https://github.com/nWaldstrom/MultiSecSOEHANK" style="color: #c70a30; font-weight: 600;">[Code]</a>  

          <div style="height: 25px;"></div>

          <div class="custom-text">
          From Micro to Macro: The Influence of Firm Heterogeneity on Foreign Shock Transmission [September 2024]
          </div>
          with <span class="ChristianKastrup"></span> 
          <div class="custom-abstr">
          Abstract: We investigate the role of firm heterogeneity and adjustment costs in the transmission
          of foreign supply shocks. Our starting point comes from a theoretical
          insight: If larger firms rely more on easily adjustable inputs, such as materials,
          then the aggregate output response to changes in the price of these inputs gets
          amplified relative to a representative firm economy. We next provide empirical evidence
          that larger firms are indeed more materials-intensive and more responsive
          to an exogenous foreign shock. We show that a New-Keynesian general equilibrium 
          model with multiple sectors and firm heterogeneity is consistent with these
          facts. We find that firm heterogeneity, in line with the data, amplifies the response
          of output and prices to a foreign supply shock, but dampens the labor and GDP
          responses.
          </div>
          <a href="files/research/Het_Firm_2024.pdf" style="color: #c70a30; font-weight: 600;">[PDF]</a>    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4746090" style="color: #c70a30; font-weight: 600;">[SSRN]</a>  


          <!-- CO-AUTHOR LINKS -->
          <script>
            const links = {
              JeppeDruedahl: '<a href="https://sites.google.com/view/jeppe-druedahl/" style="color: #398fc4; font-weight: 600;">Jeppe Druedahl</a>',
              SørenHoveRavn: '<a href="https://sites.google.com/site/sorenhoveravn/" style="color: #398fc4; font-weight: 600;">Søren Hove Ravn</a>',
              LauraSunderPlassmann: '<a href="https://sites.google.com/site/lsunderplassmann/" style="color: #398fc4; font-weight: 600;">Laura Sunder-Plassmann</a>',
              JacobMarottSundram: '<a href="https://www.sundram.dk/" style="color: #398fc4; font-weight: 600;">Jacob Marott Sundram</a>',
              ChristianKastrup: '<a href="https://sites.google.com/view/christianbkastrup/research" style="color: #398fc4; font-weight: 600;">Christian B. Kastrup</a>'
            };

            for (const [className, linkHTML] of Object.entries(links)) {
              document.querySelectorAll(`.${className}`).forEach(span => {
                span.innerHTML = linkHTML;
              });
            }
          </script>

          </span>


    design:
      columns: '1'


  ############################

  # - block: collection 
  #   id: work-in-progress
  #   content:
  #     title: Work in Progress 
  #     subtitle: ''
  #     filters:
  #       folders:
  #         - wip

  #     text: |-
  #         <div style="margin-top: -23px;">
  #         </div>

  #         ## Supply shocks and household heterogeneity in Open Economies: Implications for Optimal Monetary Policy

  #   design:
  #     columns: '2'


  ############################

  - block: collection
    id: teaching
    content:
      title: Teaching
      subtitle: ''
      text: |-
          #### Lecturer in <a href="https://kurser.ku.dk/course/a%C3%98kk08426u/2022-2023" style="color: #c70a30; text-decoration: underline;">Advanced Macroeconomics: Heterogenous Agent Models 2024</a>
          * Graduate level course on macroeconomic dynamics with heterogenous agents.\
          <a href="https://sites.google.com/view/numeconcph-advmacrohet/" style="color: #c70a30; text-decoration: underline;">[Course site]</a> <a href="https://github.com/NumEconCopenhagen/AdvMacroHet" style="color: #c70a30; text-decoration: underline;">[Course materials]</a>

          #### TA in <a href="https://kurser.ku.dk/course/a%C3%98kk08402u/" style="color: #c70a30; text-decoration: underline;">Advanced Economics of the Environment and Climate Change 2021</a>
          * Graduate level course on environmental-, natural ressource- and climate change economics

          #### TA in <a href="https://kurser.ku.dk/course/a%c3%98kb08002u/2021-2022" style="color: #c70a30; text-decoration: underline;">Principle of Economics B 2018</a>
          * Macro 101 

          #### Supervisor for BA/MA theses
          * I have experience in the supervision of BA/MA theses in areas within business cycle macro   
    design:
      columns: '2'


---
