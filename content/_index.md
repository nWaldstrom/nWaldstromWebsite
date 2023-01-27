---
# Leave the homepage title empty to use the site title
title:
date: 2023-01-27
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Override your bio text from `authors/admin/_index.md`?
      text:
  - block: markdown
    content:
      title: Research
      id: Research1
      subtitle: ''
      text: |-
          <a href='files/research/IHANK_paper_October2022.pdf' style="font-size: 110%;  font-weight: bold;">The Transmission of Foreign Demand Shocks (2022)</a>  <br>
          with <a class="coauthors" href="https://sites.google.com/view/jeppe-druedahl/">Jeppe Druedahl</a>, <a class="coauthors" href="https://sites.google.com/site/sorenhoveravn">Søren Hove Ravn</a>, <a class="coauthors" href="https://sites.google.com/site/lsunderplassmann/">Laura Sunder-Plassmann</a> and <a class="coauthors" href="https://sundram.dk/">Jacob Marott Sundram</a>. Working paper. <br>
           <a style="font-size: 110%;  font-weight: bold;">Welfare Costs of Inflation (2023)</a>  <br>
           Working paper. <br>
    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Education'
      id: education
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: ''
          title: 'Ph.D in Economics'
          date_end: '2024-09-01'
          date_start: '2021-09-01'
          description: ''
          organization: 'University of Copenhagen' 
          organization_url: https://www.economics.ku.dk/
          url: ''
        - certificate_url: ''
          title: 'M.Sc. in Economics'
          date_start: '2021-01-01'
          description: ''
          organization: 'University of Copenhagen' 
          organization_url: https://www.economics.ku.dk/
          url: ''
        - certificate_url: ''
          title: 'B.Sc. in Economics'
          date_start: '2018-05-01'
          description: ''
          organization: 'University of Copenhagen'
          organization_url: https://www.economics.ku.dk/
          url: ''
    design:
      columns: '2'
  - block: markdown
    content:
      title: Teaching
      id: teaching
      subtitle: ''
      text: |-
          #### Guest lecturer in <a href="https://kurser.ku.dk/course/a%C3%98kk08426u/2022-2023" style="color: #FFA500; text-decoration: underline;">Advanced Macroeconomics: Heterogenous Agent Models</a>
          * Graduate level course on macroeconomic dynamics with heterogenous agents.

          #### Teaching assistent in <a href="https://kurser.ku.dk/course/a%C3%98kk08402u/" style="color: #FFA500; text-decoration: underline;">Advanced Economics of the Environment and Climate Change 2021</a>
          * Graduate level course on environmental-, natural ressource- and climate change economics

          #### Teaching assistent in <a href="https://kurser.ku.dk/course/a%c3%98kb08002u/2021-2022" style="color: #FFA500; text-decoration: underline;">Principle of Economics B 2018</a>
          * Macro 101 

          #### Supervisor for BA thesis
          * I have supervised multiple students in areas within business cycle macro   
    design:
      columns: '2'
---
