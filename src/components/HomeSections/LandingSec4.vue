<template>
  <section class="FAQ" id="faq">
    <div class="container">
      <p class="heading-1">
        Qs<span>FA</span>
        <img :src="require('@/assets/images/heading-img3.png')" alt="" />
      </p>
      <div class="questions">
        <FaqItem
          activeQ="q active"
          activeA="a active"
          question="What are the steps of an IDO?"
          answer="When it comes to quality and excellence, we at Eventtia believe in helping our clients to provide the best experiences ever to thei attendees. To make this happen,When it comes to quality and excellence, we at Eventtia believe in helping our clients to provide the best experiences ever to thei attendees. To make this happen,"
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="What is First Come First Serve (FCFS) sale? And who can participate in it?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="Do I need to unstake/restake for each IDO?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="Can I unstake after each IDO?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="Do I have to stake my $TPAD for 14 days to qualify for IDO?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="What is the difference between guaranteed allocation and lottery levels?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="Do I have to register for each IDO?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />

        <FaqItem
          activeQ="q"
          activeA="a"
          question="When will I find out about my allocation?"
          answer="As it has been from the beginning, our purpose goes far beyond profit. We believe Starbucks can, and should, have a positive impact on the communities we serve."
        />
      </div>
    </div>
  </section>
</template>
<script>
import FaqItem from "@/components/HomeSections/FAQItem/FaqItem.vue";
export default {
  name: "LandingSec4",
  components: {
    FaqItem,
  },
};
</script>
