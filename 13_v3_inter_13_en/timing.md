# v3_inter_13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What kind of food is North Carolina famous for?
     2.08s  <ret> 발화 (turn1 첫 프레임)
     2.68s  agent 발화 시작: <ret> That’s a good question. North Carolina’s culinary repu
     2.82s  user  발화 끝
     2.96s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.87s]: North Carolina is known for its pork barbecue and bacon.
    10.65s  agent 발화 끝
    10.72s  user  발화 시작: Oh, barbecue, yeah. What about seafood? Is that big there to
    14.74s  user  발화 끝
    14.77s  agent 발화 시작: Seafood is certainly popular along the coast, naturally.
    18.27s  user  발화 시작: [laugh] Right, of course. What’s the *state* toast, though? 
    18.43s  agent 발화 끝
    22.37s  <ret> 발화 (turn5 첫 프레임)
    22.97s  agent 발화 시작: <ret> Well now, that’s a bit more specific— The official sta
    23.22s  user  발화 끝
    23.37s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.57s]: The official state toast of North Carolina is the Cheerwine soft drink
    33.63s  agent 발화 끝
    33.99s  user  발화 시작: Cheerwine? That’s… unexpected. Huh.
    37.69s  user  발화 끝
