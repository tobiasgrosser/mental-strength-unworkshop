(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[544],{5166:function(e,t,a){"use strict";a.r(t);var r=a(3552),n=a(7294),l=a(5444),m=a(4910),o=a(6179),s=a(394),c=a.n(s),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,r=this.props.pageContext,s=r.currentPage,i=1===s,p=s===r.numPages,u=s-1==1?"/":(s-1).toString(),g=(s+1).toString();return n.createElement(m.Z,null,n.createElement(o.Z,{title:t,keywords:["blog","gatsby","javascript","react"]}),n.createElement("div",{className:"content-box clearfix"},a.map((function(e){var t=e.node,a=c()(t.frontmatter.date).tz("Europe/London").format("MMMM DD"),r=c()(t.frontmatter.date).tz("Europe/London").format("HH:mm"),m=c()(t.frontmatter.date).tz("Europe/Zurich").format("HH:mm"),o=c()(t.frontmatter.end).tz("Europe/London").format("HH:mm"),s=c()(t.frontmatter.end).tz("Europe/Zurich").format("HH:mm");return n.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.gatsbyImageData&&n.createElement(l.Link,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src+")"}}),n.createElement("div",{className:"post-content"},n.createElement("h2",{className:"post-title"},n.createElement(l.Link,{to:t.fields.slug},t.frontmatter.title)),n.createElement("p",null,t.excerpt),n.createElement("span",{className:"post-date"},a,", ",r,"-",o," (UK), ",m,"-",s," (CH)")))})),n.createElement("div",{className:"container"},n.createElement("nav",{className:"pagination",role:"navigation"},n.createElement("ul",null,!i&&n.createElement("p",null,n.createElement(l.Link,{to:u,rel:"prev",className:"newer-posts"},"← Previous Page")),n.createElement("p",null),!p&&n.createElement("p",null,n.createElement(l.Link,{to:g,rel:"next",className:"older-posts"},"Next Page →")))))))},t}(n.Component);t.default=i}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-f80e67c6cc99db0660d0.js.map