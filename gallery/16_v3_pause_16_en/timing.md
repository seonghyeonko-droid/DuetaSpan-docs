# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about the history of San Francisco… it's quite
     3.89s  agent 발화 시작: It truly is a city with layers of history, built upon a fasc
     3.98s  user  발화 끝
     8.84s  user  발화 시작: I was wondering… when did people first start living there? I
     8.84s  agent 발화 끝
    13.32s  <ret> 발화 (turn3 첫 프레임)
    13.92s  agent 발화 시작: <ret> That’s a good question. Archaeological evidence sugges
    13.97s  user  발화 끝
    14.32s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.86s]: Humans first lived in the area of modern-day San Francisco around 3000
    22.30s  agent 발화 끝
    22.31s  user  발화 시작: Wow, 3000 BC! That’s… before pretty much anything we know.
    28.48s  user  발화 끝
    28.89s  agent 발화 시작: It’s remarkable to consider the millennia of human presence 
    36.34s  user  발화 시작: Were they the Ohlone people, then? I’ve heard that name asso
    36.45s  agent 발화 끝
    41.16s  <ret> 발화 (turn7 첫 프레임)
    41.76s  agent 발화 시작: <ret> You're recalling correctly. The Ohlone people were the
    41.85s  user  발화 끝
    42.16s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.17s]: The Ohlone people were the primary inhabitants of the San Francisco Ba
    52.70s  agent 발화 끝
    52.83s  user  발화 시작: And what did they… uh, do for a living? What was their lifes
    57.16s  agent 발화 시작: They were skilled hunter-gatherers, utilizing the abundant r
    57.23s  user  발화 끝
    64.37s  user  발화 시작: Acorns? That’s… surprising. I didn’t realize.
    64.43s  agent 발화 끝
    68.21s  user  발화 끝
    68.37s  agent 발화 시작: It requires significant processing to remove the tannins, bu
    76.81s  agent 발화 끝
    76.82s  user  발화 시작: Did they build anything permanent, or were they mostly nomad
    79.93s  <ret> 발화 (turn13 첫 프레임)
    80.52s  agent 발화 시작: <ret> That’s a common question. They constructed villages wi
    80.66s  user  발화 끝
    80.93s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.13s]: The Ohlone built villages of dome-shaped houses, but also moved season
    90.12s  agent 발화 끝
    90.40s  user  발화 시작: So, a mix of both then.…
    92.61s  user  발화 끝
    92.77s  user  발화 시작: …Interesting. I appreciate you explaining this.
    95.96s  user  발화 끝
