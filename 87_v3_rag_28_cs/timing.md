# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 정부 부처들 읽다가… 참전용사부 원래 언제 시작했어?
     4.90s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> 음, 좋은 질문이시네요. 참전용사부는 천구백삼십년 칠월 이십일일에 설립되었어요.
     5.42s  user  발화 끝
     6.50s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.29s]: The United States Department of Veterans Affairs was established on Ju
    12.24s  user  발화 시작: 천구백삼십년? 그거… 생각보다 엄청 최근이네, 그렇지 않아? 훨씬 오래된 줄 알았어.
    12.35s  agent 발화 끝
    18.39s  agent 발화 시작: 역사를 생각하면 좀 최근처럼 느껴지실 수도 있겠네요. 하지만 정식적인 구조는 시간이 지나면서 발전해 왔어요.
    18.59s  user  발화 끝
    26.17s  agent 발화 끝
    26.86s  user  발화 시작: 근데 그 전에도 참전용사들을 위한 서비스가 있었잖아? 천구백삼십년 전에 뭔가 있었을 거야, 분명.
    33.07s  <ret> 발화 (turn5 첫 프레임)
    33.15s  agent 발화 시작: <ret> 네, 물론 서비스는 있었어요. 천구백삼십년 이전에 전쟁위험보험국에서 참전용사 혜택을 담당했어요.
    33.30s  user  발화 끝
    34.19s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.25s]: Prior to 1930, veteran benefits were administered by the Bureau of War
    40.66s  agent 발화 끝
