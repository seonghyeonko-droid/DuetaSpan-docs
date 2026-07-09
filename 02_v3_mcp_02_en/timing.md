# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Begin watching for a weather update from weather dot example
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.77s  agent 발화 시작: <ret> Certainly, I can monitor that website for you. The cur
     3.98s  user  발화 끝
     5.30s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.13s]: (tool result) The website reports current conditions in London are 12 
    11.61s  agent 발화 끝
    12.99s  user  발화 시작: Oh, that's… colder than I thought, actually. I— I mean, I wa
    18.82s  user  발화 끝
    18.86s  agent 발화 시작: London weather can be quite changeable, yes. Are you plannin
    23.58s  user  발화 시작: Maybe. Um, could you check if there are any direct flights f
    23.58s  agent 발화 끝
    28.71s  <ret> 발화 (turn5 첫 프레임)
    29.02s  agent 발화 시작: <ret> I can certainly look into flight availability for you.
    29.23s  user  발화 끝
    30.23s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.31s]: (tool result) There are three direct flights tomorrow: United at 9:00 
    33.12s  user  발화 시작: Mhm.
    33.75s  user  발화 끝
    38.20s  agent 발화 끝
    38.44s  user  발화 시작: Hmm, the United one sounds good. Book that for me, please.
    42.34s  <ret> 발화 (turn8 첫 프레임)
    42.41s  agent 발화 시작: <ret> Absolutely, I can take care of that booking for you. Y
    42.56s  user  발화 끝
    43.38s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.41s]: (tool result) Your United flight to London tomorrow at 9:00 AM is conf
    52.10s  agent 발화 끝
