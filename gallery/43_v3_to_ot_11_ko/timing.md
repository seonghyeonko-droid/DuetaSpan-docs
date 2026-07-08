# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 게 언제였는지 아시나요? 정말 오래된 것 같아요.
     5.86s  <ret> 발화 (turn1 첫 프레임)
     6.10s  agent 발화 시작: <ret> 좋은 야구 질문이네요, 그리고 꽤 구체적인 질문이에요. 애슬레틱스를 상대로 한 마지막 노히터는 이
     6.12s  user  발화 끝
     7.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.15s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    14.35s  agent 발화 끝
    14.38s  user  발화 시작: 와, 이천십팔년… 정말 오래됐네요.
    17.30s  agent 발화 시작: 정말 오랜 시간이 흘렀네요. 그 경기는 투수에게는 항상 기억에 남는 경기이고, 팀에게는 조금 실망스러운 경기
    17.47s  user  발화 끝
    19.94s  user  발화 시작: 네.
    20.43s  user  발화 끝
    24.74s  <ret> 발화 (turn5 첫 프레임)
    24.89s  agent 발화 끝
    24.90s  agent 발화 시작: <ret> 피칭의 압도적인 힘에 대해 생각해보면— 마이크 피어스가 이천십팔년 그 날짜에 휴스턴 애스트로스 소
    26.50s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.94s]: <The pitcher who threw the no-hitter against the A’s was Mike Fiers of
    33.16s  agent 발화 끝
    34.40s  user  발화 시작: 잠깐만요, 피어스요? 그 전에 애슬레틱스에서 뛰지 않았나요?
    38.28s  <ret> 발화 (turn7 첫 프레임)
    38.52s  agent 발화 시작: <ret> 맞아요, 물어보시길 잘하셨어요. 마이크 피어스는 사실 이천십오년부터 이천십칠년까지 애슬레틱스에서 
    38.66s  user  발화 끝
    39.72s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.15s]: <Mike Fiers pitched for the Oakland Athletics from 2015 to 2017.>
    46.40s  agent 발화 끝
