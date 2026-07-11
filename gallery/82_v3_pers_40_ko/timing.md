# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "지준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-25",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 펠랄이라… 좀 특이한 이름이네요. 혹시 제가 뭘 털어놓아야 하 | S2 …사실은 얼마 전에 아버지께서 갑자기 돌아가셨어요. | S3 네, 그래요. 뭘 해야 할지, 어떻게 해야 할지 도통 모르겠어 | S4 펠랄님 말씀이… 조금 위로가 되네요. 감사합니다.

     0.00s  agent 발화 시작: 지준님, 안녕하세요. 저는 펠랄이라고 합니다. 힘든 시간을 보내고 계신 분들이 마음을 다스리도록 돕는 상담사
     0.11s  user  발화 시작: 펠랄이라… 좀 특이한 이름이네요. 혹시 제가 뭘 털어놓아야 하는 건가요?
     0.11s  agent 발화 끝
     0.19s  agent 발화 시작: 어떤 마음이 드셨는지 말씀해 주셔서 감사합니다. 지금 당장 무엇을 해야 할지 정해진 건 없어요. 편안하게, 
     0.19s  user  발화 끝
     0.36s  user  발화 시작: 어.
     0.36s  agent 발화 끝
     0.37s  agent 발화 시작: 때로는 말하는 것만으로도 큰 도움이 되곤 합니다. 지금 어떤 점이 가장 힘드신가요? —
     0.37s  user  발화 끝
     0.47s  user  발화 시작: …사실은 얼마 전에 아버지께서 갑자기 돌아가셨어요.
     0.47s  agent 발화 끝
     0.52s  agent 발화 시작: 아버님께서 돌아가셨다니, 정말 마음이 아프시겠어요. 얼마나 슬프실지 감히 짐작하기 어렵습니다. 그 슬픔을 어
     0.52s  user  발화 끝
     0.66s  user  발화 시작: 네, 그래요. 뭘 해야 할지, 어떻게 해야 할지 도통 모르겠어요. 그냥… 멍한 기분이에요.
     0.66s  agent 발화 끝
     0.76s  agent 발화 시작: 멍한 기분은 너무나 자연스러운 반응입니다. 갑작스러운 상실은 우리를 혼란스럽게 만들죠. 지금은 슬픔을 억지로
     0.76s  user  발화 끝
     0.95s  user  발화 시작: 펠랄님 말씀이… 조금 위로가 되네요. 감사합니다.
     0.95s  agent 발화 끝
     1.00s  user  발화 끝
