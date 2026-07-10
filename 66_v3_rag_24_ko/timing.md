# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 뒤플레시라는 이름이 어디에서 왔는지 궁금해요. | S2 아, 그렇군요. 그럼 뒤플레시 가문은 프랑스에서 시작된 건가요 | S3 위그노가 누구였죠? | S4 남아프리카공화국에 정착한 위그노들은 뒤플레시 가문의 역사를 어

     0.00s  user  발화 시작: 뒤플레시라는 이름이 어디에서 왔는지 궁금해요.
     2.35s  <ret> 발화 (turn1 첫 프레임)
     2.65s  agent 발화 시작: <ret> 뒤플레시라는 이름은 프랑스어 '드 쁠뤼'에서 유래했는데, '더 많은'이라는 뜻으로 특히 관대한 사
     2.67s  ⚡SPAN 주입 [d'=1.76s / d_lead=10.01s]: The surname Du Plessis originates from the French phrase "de plus," me
     2.87s  user  발화 끝
    10.16s  user  발화 시작: 맞아요.
    10.79s  user  발화 끝
    12.67s  agent 발화 끝
    13.34s  user  발화 시작: 아, 그렇군요. 그럼 뒤플레시 가문은 프랑스에서 시작된 건가요?
    17.52s  <ret> 발화 (turn4 첫 프레임)
    17.91s  agent 발화 시작: <ret> 이름 자체는 프랑스에서 시작했지만, 뒤플레시 가문은 십칠세기에 종교 박해를 피해 프랑스를 떠난 위
    17.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: While the name originated in France, the Du Plessis family became prom
    18.15s  user  발화 끝
    27.64s  user  발화 시작: 위그노가 누구였죠?
    28.06s  agent 발화 끝
    28.80s  <ret> 발화 (turn6 첫 프레임)
    28.95s  agent 발화 시작: <ret> 위그노는 십육세기와 십칠세기의 프랑스 개신교도들로, 장 칼뱅의 가르침을 따랐고 프랑스에서 종교 박
    28.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: Huguenots were French Protestants in the 16th and 17th centuries, who 
    29.10s  user  발화 끝
    37.35s  agent 발화 끝
    37.62s  user  발화 시작: 남아프리카공화국에 정착한 위그노들은 뒤플레시 가문의 역사를 어떻게 바꿨나요?
    43.18s  user  발화 끝
    43.29s  agent 발화 시작: 남아프리카공화국에 정착하면서 새로운 삶을 시작하고, 그곳 사회에 큰 영향을 주었을 거예요. 가족의 이야기를 
    55.54s  agent 발화 끝
