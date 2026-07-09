# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii… uh, and it got me wonderin
     7.54s  agent 발화 시작: That’s a good question, thinking about the history of that r
     7.74s  user  발화 끝
    11.22s  <ret> 발화 (turn2 첫 프레임)
    11.54s  agent 발화 시작: <ret> Let me quickly check the records for you— The last eru
    11.66s  agent 발화 끝
    13.14s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.79s]: Mount Vesuvius last erupted in March of nineteen forty-four.
    20.42s  user  발화 시작: Nineteen forty-four? Wow, that’s… relatively recent, isn’t i
    20.53s  agent 발화 끝
    25.00s  agent 발화 시작: [laugh] It is, compared to some volcanoes— though it’s been 
    25.10s  user  발화 끝
    31.76s  <ret> 발화 (turn5 첫 프레임)
    32.00s  agent 발화 시작: <ret> I can find details on that eruption— The eruption in n
    32.14s  agent 발화 끝
    33.20s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.40s]: The nineteen forty-four eruption caused damage to nearby towns and US 
    41.23s  agent 발화 끝
    41.98s  user  발화 시작: US aircraft? That’s—
    44.37s  user  발화 시작: …wait, did that eruption actually affect the Allied landings
    44.55s  user  발화 끝
    48.81s  agent 발화 시작: That's a very insightful connection to make, regarding the w
    48.86s  user  발화 끝
    53.35s  <ret> 발화 (turn9 첫 프레임)
    53.43s  agent 발화 시작: <ret> Yes, looking at historical reports— The nineteen forty
    53.54s  agent 발화 끝
    55.11s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.01s]: The 1944 eruption disrupted Allied airfields and delayed some operatio
    63.68s  agent 발화 끝
