---
# Leave the homepage title empty to use the site title
title: ''
date: null
type: landing


sections:
  ############################
  - block: about.biography
    id: about
    content:
      title: <span style="color:var(--pcolor); font-size:2rem;">About Me</span>
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin


  - block: collection
    id: working-papers
    content:
      title: Working Papers 
      subtitle: ''
      text: '{{< workingpapers_content >}}'
    design:
      columns: '2'  # Change the number of columns if needed


  - block: collection
    id: teaching
    content:
      title: Teaching
      subtitle: ''
      text: '{{< teaching_content >}}'
    design:
      columns: '2'

  - block: collection
    id: codes
    content:
      title: Codes
      subtitle: ''
      text: '{{< codes_content >}}'
    design:
      columns: '2'

---
