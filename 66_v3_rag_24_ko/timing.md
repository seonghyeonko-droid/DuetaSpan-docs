# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 듀 플레시스라는 성이 어디에서 왔는지 궁금해요. 혹시 아시나요 | S2 아, 프랑스에서 왔군요. 그럼 아프리카와는 어떤 관계가 있는  | S3 위그노가 뭐였죠? 잠깐만요. | S4 아, 알겠어요. 그럼 남아프리카에서 흔한 성인가요?

     0.00s  user  발화 시작: 듀 플레시스라는 성이 어디에서 왔는지 궁금해요. 혹시 아시나요?
     4.85s  <ret> 발화 (turn1 첫 프레임)
     5.15s  agent 발화 시작: <ret> 그 이름의 기원에 대해 알아볼까요? 듀 플레시스 성은 프랑스 노르망디의 지명인 “플레시”에서 유래
     5.37s  user  발화 끝
     5.89s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.93s]: The surname Du Plessis originates from the French name "du Plessis," m
    12.11s  user  발화 시작: Mhm.
    13.07s  user  발화 끝
    14.51s  agent 발화 끝
    14.63s  user  발화 시작: 아, 프랑스에서 왔군요. 그럼 아프리카와는 어떤 관계가 있는 건가요?
    19.42s  <ret> 발화 (turn4 첫 프레임)
    19.77s  user  발화 끝
    19.82s  agent 발화 시작: <ret> 남아프리카 공화국에 정착한 위그노 망명민들이 그 성을 널리 퍼뜨렸기 때문입니다.
    21.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.56s]: Huguenots fleeing religious persecution in France settled in South Afr
    25.21s  agent 발화 시작: 17세기와 18세기에 종교적 박해를 피해 프랑스에서 남아프리카 공화국으로 이주한 위그노들이 듀 플레시스 성을
    25.38s  agent 발화 끝
    34.10s  agent 발화 끝
    34.11s  user  발화 시작: 위그노가 뭐였죠? 잠깐만요.
    37.23s  agent 발화 시작: 위그노는 프랑스 개신교 신자들을 말합니다.
    37.30s  user  발화 끝
    40.29s  user  발화 시작: 아, 알겠어요. 그럼 남아프리카에서 흔한 성인가요?
    40.46s  agent 발화 끝
    44.54s  <ret> 발화 (turn9 첫 프레임)
    44.93s  agent 발화 시작: <ret> 네, 남아프리카 공화국에서 흔한 성 중 하나입니다.
    45.10s  user  발화 끝
    45.74s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.66s]: Du Plessis is a common surname in South Africa, ranking among the top 
    48.49s  agent 발화 시작: 듀 플레시스 성은 남아프리카 공화국에서 가장 흔한 성
    48.59s  agent 발화 끝
    52.60s  agent 발화 끝
