# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시 궁금한 게 있는데요, 오클랜드 애슬레틱스 팀이 노히트 게 | S2 와, 생각보다 그렇게 오래 전 일은 아니네요. 누가 그랬어요? | S3 저기요, 냉동실에서 닭고기 꺼낸 거 기억하세요? | S4 죄송해요. 다시 야구 이야기로 돌아가서… 한 팀이 한 시즌에 

     0.00s  user  발화 시작: 혹시 궁금한 게 있는데요, 오클랜드 애슬레틱스 팀이 노히트 게임을 당한 적이 있는지 궁금해요. 그런 일이 있
     8.80s  <ret> 발화 (turn1 첫 프레임)
     8.87s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 그런 일이 있을 때면 정말 기억에 남죠. 애슬레틱스는 이천십팔 년 4월 2
     9.04s  user  발화 끝
    10.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.15s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    18.61s  agent 발화 끝
    20.04s  user  발화 시작: 와, 생각보다 그렇게 오래 전 일은 아니네요. 누가 그랬어요?
    24.08s  <ret> 발화 (turn3 첫 프레임)
    24.47s  agent 발화 시작: <ret> 잠깐만 확인해 볼게요. 그 경기를 누가 던졌는지 알려 드릴게요. 마이크 피어스가 휴스턴 애스트로스
    24.63s  user  발화 끝
    26.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.84s]: Mike Fiers of the Houston Astros pitched the no-hitter against the Oak
    34.09s  user  발화 시작: 저기요, 냉동실에서 닭고기 꺼낸 거 기억하세요?
    34.16s  agent 발화 끝
    37.45s  user  발화 시작: 죄송해요. 다시 야구 이야기로 돌아가서… 한 팀이 한 시즌에 노히트 게임을 여러 번 당하는 경우가 흔한가요?
    37.65s  user  발화 끝
    44.09s  user  발화 끝
    44.09s  agent 발화 시작: 상대적으로 드문 일이지만, 가끔씩 있기도 해요. 한 팀이 한 시즌에 여러 번 노히트 게임을 당하는 건 확실히
    52.25s  agent 발화 끝
