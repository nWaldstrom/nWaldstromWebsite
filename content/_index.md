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
      title: <span style="color:#D43817">About Me</span>
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
          <div style="margin-top: -23px;">
          </div>

          ## Fiscal Multipliers in Small Open Economies With Heterogeneous Households [July 2024]
          with Jeppe Druedahl, Søren Hove Ravn, Laura Sunder-Plassmann and Jacob Marott Sundram. 
          <p style="margin-bottom: 1px; font-size : 0.8em; font-style: italic;"> 
          Abstract: We study fiscal multipliers in a small open economy Heterogeneous Agent New-Keynesian (SOE-HANK) model. We provide a set of equivalence results under which the fiscal multiplier in our SOE-HANK model is the same---at any horizon---as in a corresponding representative-agent (RANK) model. Under more general assumptions, the fiscal multipliers in the two models are not equivalent, but remain relatively similar. Yet, we show that the underlying channels driving the fiscal multipliers differ substantially. In particular, consumption increases while net exports tend to decline in the HANK model, whereas the opposite is true in the RANK model.
          </p> 
          <a href="files/research/Fiscal_IHANK_20240708.pdf" style="color: #D43817;">[PDF]</a> <a href="files/research/Fiscal_IHANK_IMFER.pdf" style="color: #D43817;">[Slides]</a>   </a>  

          ## From Micro to Macro: The Influence of Firm Heterogeneity on Foreign Shock Transmission [May 2024] [*Submitted*]
          with Christian B. Kastrup.
          <p style="margin-bottom: 1px; font-size : 0.8em; font-style: italic;"> 
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
          </p> 
          <a href="files/research/Het_Firm_2024.pdf" style="color: #D43817;">[PDF]</a>    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4746090" style="color: #D43817;">[SSRN]</a>  

          ## The Transmission of Foreign Demand Shocks [October 2022]
          with Jeppe Druedahl, Søren Hove Ravn, Laura Sunder-Plassmann and Jacob Marott Sundram.
          <p style="margin-bottom: 1px; font-size : 0.8em; font-style: italic;"> 
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
          </p> 
          <a href="files/research/IHANK_paper_October2022.pdf" style="color: #D43817;">[PDF]</a>   <a href="https://github.com/nWaldstrom/MultiSecSOEHANK" style="color: #D43817;">[Code]</a> 
          </span>


    design:
      columns: '2'


  ############################

  - block: collection 
    id: work-in-progress
    content:
      title: Work in Progress 
      subtitle: ''
      filters:
        folders:
          - wip

      text: |-
          <div style="margin-top: -23px;">
          </div>

          ## Supply shocks and household heterogeneity in Open Economies: Implications for Optimal Monetary Policy

    design:
      columns: '2'


  ############################

  - block: collection
    id: teaching
    content:
      title: Teaching
      subtitle: ''
      text: |-
          #### Lecturer in <a href="https://kurser.ku.dk/course/a%C3%98kk08426u/2022-2023" style="color: #D43817; text-decoration: underline;">Advanced Macroeconomics: Heterogenous Agent Models 2024</a>
          * Graduate level course on macroeconomic dynamics with heterogenous agents.

          #### TA in <a href="https://kurser.ku.dk/course/a%C3%98kk08402u/" style="color: #D43817; text-decoration: underline;">Advanced Economics of the Environment and Climate Change 2021</a>
          * Graduate level course on environmental-, natural ressource- and climate change economics

          #### TA in <a href="https://kurser.ku.dk/course/a%c3%98kb08002u/2021-2022" style="color: #D43817; text-decoration: underline;">Principle of Economics B 2018</a>
          * Macro 101 

          #### Supervisor for BA/MA theses
          * I have supervised multiple students in areas within business cycle macro   
    design:
      columns: '2'


---
