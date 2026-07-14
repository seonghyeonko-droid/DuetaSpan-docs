# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "채훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Turkish."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "skill",
#       "text": "User is getting fairly good at astrophotography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 토라나 씨. 요즘 직장 상사 때문에 너무 힘들어요 | S2 아, 그렇군요. 그런데 두 운하가 무슨 차이가 있나요? | S3 그렇군요… 그럼 두 운하 모두 중요한 역할을 했다는 거네요. | S4 부산에 있군요… 저는 지금 서울에 있어요.

     0.00s  user  발화 시작: 안녕하세요, 토라나 씨. 요즘 직장 상사 때문에 너무 힘들어요.
     5.01s  agent 발화 시작: 안녕하세요! 직장 상사 때문에 힘드시군요. 어떤 점이 가장 어려우신가요?
     5.01s  user  발화 끝
    10.02s  user  발화 시작: 음.
    10.02s  agent 발화 끝
    10.58s  user  발화 시작: 계속 제 의견을 무시하고, 자기 생각만 강요해요.
    10.58s  user  발화 끝
    13.87s  <ret> 발화 (turn4 첫 프레임)
    14.47s  agent 발화 시작: <ret> 놀랍게도 뉴올리언스 배수 운하와 오거스타 운하는 길이가 거의 같습니다. 둘 다 약 십이 점 일킬로
    14.47s  user  발화 끝
    15.37s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.91s]: The New Orleans Outfall Canals and the Augusta Canal are both approxim
    23.38s  user  발화 시작: 네.
    23.38s  agent 발화 끝
    23.94s  user  발화 시작: 아, 그렇군요. 그런데 두 운하가 무슨 차이가 있나요?
    23.94s  user  발화 끝
    28.24s  <ret> 발화 (turn7 첫 프레임)
    28.39s  agent 발화 시작: <ret> 오거스타 운하는 천팔백사십오년부터 조지아주 오거스타 시에 수력을 공급하기 위해 건설되었고, 뉴올리
    28.39s  user  발화 끝
    29.32s  ⚡SPAN 주입 [d'=1.08s / d_lead=10.02s]: The Augusta Canal was constructed beginning in 1845 to provide water p
    38.41s  user  발화 시작: 그렇군요… 그럼 두 운하 모두 중요한 역할을 했다는 거네요.
    38.41s  agent 발화 끝
    43.42s  agent 발화 시작: [happy] 맞아요! 두 운하 모두 각 도시의 역사와 발전에 중요한 역할을 했죠.
    43.42s  user  발화 끝
    50.10s  user  발화 시작: 네.
    50.10s  agent 발화 끝
    50.66s  user  발화 시작: 아뇨, 괜찮아요. 그런데 토라나 씨, 저는 좀 더 적극적으로 제 의견을 표현해야 할까요?
    50.66s  user  발화 끝
    57.36s  <ret> 발화 (turn12 첫 프레임)
    57.90s  agent 발화 시작: <ret> [curious] 적극적으로 의견을 표현하는 건 좋은 방법이지만, 상황에 따라 부드럽게 전달하는 
    57.90s  user  발화 끝
    58.03s  ⚡SPAN 주입 [d'=0.67s / d_lead=10.58s]: (tool result) 부산광역시 해운대구 맛집: 금수복국 (Korean cuisine, 4.5 stars, price ti
    68.47s  agent 발화 시작: 부산 해운대구에 맛있는 한식집이 있어요. 금수복국이라는 곳인데 평점도 좋고 가격도 적당해요.
    68.47s  agent 발화 끝
    74.60s  user  발화 시작: 부산에 있군요… 저는 지금 서울에 있어요.
    74.60s  agent 발화 끝
    77.94s  agent 발화 시작: 아, 서울에 계시는군요. 그럼 서울에서 가까운 곳으로 찾아볼까요?
    77.94s  user  발화 끝
    82.39s  agent 발화 끝
