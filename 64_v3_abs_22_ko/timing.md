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

# EXAMINER(FDB-v2) 단계: S1 아나키스트들이 싫어하는 정부 형태가 뭐예요? | S2 자치 사회라… 그건 좀 복잡한데요. | S3 국가 권력에 반대하는군요. 그 이유는 뭔가요? | S4 다양한 분파가 있다니, 흥미롭네요. 그럼 가장 대표적인 분파는

     0.00s  user  발화 시작: 아나키스트들이 싫어하는 정부 형태가 뭐예요?
     2.87s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> 아, 그건 제가 지금 바로 알려드리기 어렵네요. 관련 정보를 찾을 수 없었어요.
     3.24s  user  발화 끝
     4.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: (no information found)
     7.79s  user  발화 시작: 음… 그럼 아나키즘 자체에 대해 좀 설명해 주실 수 있나요?
     7.81s  agent 발화 끝
    11.36s  <ret> 발화 (turn3 첫 프레임)
    11.44s  agent 발화 시작: <ret> 아나키즘은 자발적인 기관을 기반으로 하는 자치 사회를 옹호하는 정치 철학이라고 해요.
    11.49s  user  발화 끝
    11.86s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.33s]: [source: Wikipedia] Anarchism is a political philosophy that advocates
    16.77s  agent 발화 끝
    17.42s  user  발화 시작: 자치 사회라… 그건 좀 복잡한데요.
    20.37s  agent 발화 시작: 네, 좀 추상적으로 들릴 수도 있어요. 아나키스트들은 보통 국가 권력에 반대하는 경향이 있답니다.
    20.52s  user  발화 끝
    26.16s  agent 발화 끝
    28.12s  user  발화 시작: 국가 권력에 반대하는군요. 그 이유는 뭔가요?
    31.65s  user  발화 끝
    31.69s  agent 발화 시작: 아나키스트들은 국가가 개인의 자유를 억압하고 불평등을 심화시킨다고 생각해요—
    35.81s  user  발화 시작: 잠깐만요, 그럼 아나키스트들은 정부가 아예 없어져야 한다고 믿는 건가요?
    36.37s  agent 발화 끝
    40.35s  user  발화 끝
    40.47s  agent 발화 시작: 네, 맞아요. 아나키스트들은 정부가 불필요하며, 오히려 해로운 존재라고 보는 경우가 많아요.
    44.31s  user  발화 시작: 네.
    44.76s  user  발화 끝
    46.63s  agent 발화 시작: 물론 아나키즘 내에서도 다양한 분파가 있고, 의견이 조금씩 다르긴 해요.
    46.63s  agent 발화 끝
    51.49s  agent 발화 끝
    51.76s  user  발화 시작: 다양한 분파가 있다니, 흥미롭네요. 그럼 가장 대표적인 분파는 어떤 게 있나요?
    56.74s  <ret> 발화 (turn13 첫 프레임)
    56.85s  user  발화 끝
    56.98s  agent 발화 시작: <ret> 개인주의적 아나키즘은 개인의 자유와 자기 소유권을 강조하고, 사회적 아나키즘은 사회적 평등과 협력
    57.70s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.37s]: [source: Stanford Encyclopedia of Philosophy] Individualist anarchism 
    64.35s  agent 발화 끝
