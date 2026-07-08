# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you set the user agent to MyCustomBrowser version ten 
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.40s  agent 발화 시작: <ret> Certainly, I can adjust the browser’s settings for you
     4.54s  user  발화 끝
     6.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.96s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    14.09s  agent 발화 끝
    14.57s  user  발화 시작: Great. Now, can you check if that user agent is detectable o
    19.07s  <ret> 발화 (turn3 첫 프레임)
    19.30s  agent 발화 시작: <ret> Let’s see if that custom user agent is recognized by C
    19.52s  user  발화 끝
    19.57s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.52s]: (tool result) CanIUse does not have any specific data for MyCustomBrow
    28.34s  agent 발화 끝
    28.37s  user  발화 시작: Hmm. Okay, could you then search for “browser compatibility 
    33.69s  <ret> 발화 (turn5 첫 프레임)
    34.01s  agent 발화 시작: <ret> Of course, let me perform that search for you right aw
    34.12s  user  발화 끝
    35.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.01s]: (tool result) Google found approximately seven hundred and eighty-two 
    41.95s  user  발화 시작: That’s a lot! Can you read me the title and snippet of the f
    42.03s  agent 발화 끝
    46.12s  agent 발화 시작: Absolutely, I can
    46.16s  user  발화 끝
    47.59s  agent 발화 끝
