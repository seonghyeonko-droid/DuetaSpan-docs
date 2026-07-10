# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "수훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "home",
#       "text": "User's home address is 244 Oak Avenue."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 무정부주의자들이 가장 싫어하는 정부 형태가 뭐예요? | S2 …그런데 그게 현실적으로 가능한 걸까요? | S3 음, 좀 어려울 것 같기도 하고요. 그럼, 무정부주의자들이 역 | S4 그렇군요. 아, 혹시 지금도 무정부주의 단체들이 활동하고 있나

     0.00s  user  발화 시작: 무정부주의자들이 가장 싫어하는 정부 형태가 뭐예요?
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.47s  agent 발화 시작: <ret> 무정부주의자들이 가장 싫어하는 정부 형태는… 정보가 없습니다… 모든 형태의 정부입니다.
     3.70s  user  발화 끝
     5.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: 무정부주의자들은 모든 형태의 정부를 반대합니다.
    10.01s  agent 발화 끝
    10.31s  user  발화 시작: 아, 그렇군요. 그럼 그 사람들이 뭘 옹호하는지는 알 수 있어요?
    13.58s  <ret> 발화 (turn3 첫 프레임)
    13.88s  user  발화 끝
    13.89s  agent 발화 시작: <ret> 무정부주의는 일반적으로 모든 형태의 강제적인 통치에 반대하며, 자발적인 협력과 개인의 자유를 강조
    14.94s  ⚡SPAN 주입 [d'=1.36s / d_lead=11.82s]: 무정부주의자들은 모든 형태의 정부를 반대하며 자치적으로 조직된 사회를 옹호합니다.
    21.46s  user  발화 시작: 네.
    21.95s  user  발화 끝
    25.71s  agent 발화 끝
    26.25s  user  발화 시작: …그런데 그게 현실적으로 가능한 걸까요?
    28.60s  <ret> 발화 (turn6 첫 프레임)
    28.67s  agent 발화 시작: <ret> 현실적으로 무정부주의 사회가 작동 가능할지에 대한 논쟁은 오랫동안 이어져 왔습니다. 일부 이론가들
    28.83s  user  발화 끝
    30.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.01s]: 무정부주의는 일반적으로 모든 형태의 강제적인 통치에 반대하며, 자발적인 협력과 개인의 자유를 강조합니다… 자치적으로 조직된 사
    42.29s  user  발화 시작: 음, 좀 어려울 것 같기도 하고요. 그럼, 무정부주의자들이 역사적으로 어떤 사건에 영향을 줬는지 알려줄 수 
    42.68s  agent 발화 끝
    48.86s  <ret> 발화 (turn8 첫 프레임)
    48.94s  agent 발화 시작: <ret> 무정부주의 사상은 스페인 내전이나 러시아 혁명과 같은 역사적 사건에 영향을 미쳤습니다. 다만, 그
    49.06s  user  발화 끝
    50.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.87s]: 무정부주의자들은 스페인 내전, 러시아 혁명, 그리고 다양한 노동 운동과 시위에 영향을 미쳤습니다.
    62.81s  agent 발화 끝
    64.30s  user  발화 시작: 스페인 내전에서 구체적으로 어떤 역할을 했는지 좀 더 자세히 알려줄 수 있을까요?
    68.53s  <ret> 발화 (turn10 첫 프레임)
    68.59s  agent 발화 시작: <ret> 스페인 내전 당시 무정부주의자들은 아라곤 지역에서 자치 공동체를 건설하고, 혁명적인 사회 개혁을 
    68.78s  user  발화 끝
    70.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.86s]: 무정부주의자들은 스페인 내전에서 아라곤 지역에서 자치 공동체를 건설하고 혁명적인 사회 실험을 시도했습니다.
    84.45s  agent 발화 끝
    84.72s  user  발화 시작: 그렇군요. 아, 혹시 지금도 무정부주의 단체들이 활동하고 있나요?
    89.17s  <ret> 발화 (turn12 첫 프레임)
    89.32s  agent 발화 시작: <ret> 네, 전 세계적으로 다양한 무정부주의 단체들이 활동하고 있습니다. 활동 방식과 목표는 매우 다양합
    89.54s  user  발화 끝
    90.45s  ⚡SPAN 주입 [d'=1.28s / d_lead=9.17s]: (no information found)
    98.49s  agent 발화 끝
