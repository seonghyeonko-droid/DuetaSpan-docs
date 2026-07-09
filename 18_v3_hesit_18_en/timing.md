# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just reading about Pompeii,  | S2 I— I mean, were there… casualties  | S3 What kind of tools? I’m just… curi | S4 Evacuation plans… good. That’s… re

     0.00s  user  발화 시작: I was just reading about Pompeii, and it got me thinking… uh
     6.13s  agent 발화 시작: That’s a very natural question after learning about Pompeii.
     6.35s  user  발화 끝
    12.99s  agent 발화 끝
    14.42s  user  발화 시작: Yeah, I mean, is it still… active? I guess that’s obvious, b
    18.40s  <ret> 발화 (turn3 첫 프레임)
    18.70s  agent 발화 시작: <ret> Considering the history, that’s a perfectly valid conc
    18.77s  user  발화 끝
    20.32s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.62s]: Mount Vesuvius last erupted in March 1944.
    26.40s  agent 발화 끝
    27.21s  user  발화 시작: Nineteen forty-four? Wow. That’s… more recent than I thought
    32.21s  user  발화 끝
    32.25s  agent 발화 시작: It’s easy to assume ancient events are long past, isn't it? 
    37.52s  agent 발화 끝
    38.21s  user  발화 시작: I— I mean, were there… casualties that time?
    41.19s  <ret> 발화 (turn7 첫 프레임)
    41.42s  agent 발화 시작: <ret> It’s good to think about the human impact of these eve
    41.45s  user  발화 끝
    42.63s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.08s]: The 1944 eruption caused approximately 26 deaths.
    48.84s  agent 발화 끝
    49.45s  user  발화 시작: Twenty-six… that’s terrible.
    51.23s  agent 발화 시작: It certainly was a difficult time for those communities, a r
    51.48s  user  발화 끝
    54.74s  user  발화 시작: Yeah.
    55.09s  user  발화 끝
    56.51s  agent 발화 끝
    56.64s  user  발화 시작: So, is it being… monitored? Closely, I mean?
    59.97s  user  발화 끝
    60.12s  <ret> 발화 (turn12 첫 프레임)
    60.15s  agent 발화 시작: <ret> Absolutely, ongoing monitoring is essential for safety
    62.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.71s]: Vesuvius is one of the most closely monitored volcanoes in the world.
    66.34s  user  발화 시작: Oh.
    66.69s  user  발화 끝
    68.59s  agent 발화 시작: Scientists use a variety of tools to track its activity, ens
    68.64s  agent 발화 끝
    73.80s  user  발화 시작: What kind of tools? I’m just… curious.
    73.81s  agent 발화 끝
    76.97s  agent 발화 시작: They use seismographs, gas sensors, and satellite imagery, a
    77.03s  user  발화 끝
    82.85s  agent 발화 끝
    82.99s  user  발화 시작: Satellite imagery… that’s pretty advanced.
    86.03s  agent 발화 시작: It allows them to detect even subtle changes in the volcano'
    86.13s  user  발화 끝
    89.26s  user  발화 시작: Right.
    89.76s  user  발화 끝
    90.94s  agent 발화 끝
    91.34s  user  발화 시작: But is there a plan, like, if it erupts again?
    93.81s  <ret> 발화 (turn21 첫 프레임)
    93.86s  agent 발화 시작: <ret> Planning for potential events is always prudent. Evacu
    93.92s  user  발화 끝
    95.73s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.02s]: Evacuation plans are in place for the surrounding population.
    96.21s  user  발화 시작: Uh-huh.
    96.71s  user  발화 끝
   100.77s  agent 발화 끝
   101.12s  user  발화 시작: Evacuation plans… good. That’s… reassuring, I guess.
   105.15s  user  발화 끝
   105.24s  agent 발화 시작: It’s a testament to the dedication of the scientists and eme
   106.66s  user  발화 시작: Yeah.
   107.06s  user  발화 끝
   109.79s  user  발화 시작: It’s just… a little scary to think about, you know? Living n
   109.83s  agent 발화 끝
   114.42s  user  발화 끝
   114.58s  agent 발화 시작: It’s perfectly natural to feel a sense of apprehension, livi
   116.43s  user  발화 시작: Right.
   116.92s  user  발화 끝
   119.11s  agent 발화 끝
   120.73s  user  발화 시작: Yeah. I— I guess it puts things in perspective.
   124.33s  agent 발화 시작: It certainly does. It can be a powerful reminder of our plac
   124.52s  user  발화 끝
   129.20s  agent 발화 끝
