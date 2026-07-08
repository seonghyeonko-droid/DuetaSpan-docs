# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you set the user agent to MyCustomBrowser version ten 
     4.43s  <ret> 발화 (turn1 첫 프레임)
     4.51s  agent 발화 시작: <ret> Let’s adjust your browser settings— Excellent, I have 
     4.72s  user  발화 끝
     5.47s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.22s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    11.18s  agent 발화 끝
    11.66s  user  발화 시작: And now, could you check if that change was detected on exam
    15.39s  <ret> 발화 (turn3 첫 프레임)
    15.54s  agent 발화 시작: <ret> Certainly, let’s verify that update— It appears exampl
    15.78s  user  발화 끝
    16.43s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.19s]: (tool result) The reported user agent on example.com is MyCustomBrowse
    23.00s  agent 발화 끝
    23.02s  user  발화 시작: Oh, good. Um, could you find me reviews for a bakery near me
    26.72s  user  발화 끝
    26.86s  agent 발화 시작: [interrupting] …that specializes in croissants?
    29.74s  <ret> 발화 (turn6 첫 프레임)
    30.06s  agent 발화 시작: <ret> I can certainly locate bakeries— Le Petit Croissant is
    30.10s  agent 발화 끝
    30.86s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.15s]: (tool result) Le Petit Croissant is 0.7 miles away with 4.8 stars from
    38.55s  user  발화 시작: Oh, that sounds lovely. Could you reserve a table for two th
    38.64s  agent 발화 끝
    43.60s  user  발화 끝
    44.06s  agent 발화 시작: Let’s
    44.50s  agent 발화 끝
