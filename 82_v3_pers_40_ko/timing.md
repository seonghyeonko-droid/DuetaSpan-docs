# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "윤국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 무슨 일을 도와주시는데요? | S2 졸업을 앞두고 있는데, 앞으로 뭘 해야 할지 정말 막막해요. | S3 네, 그런 느낌이에요. | S4 …알겠어요. 감사합니다, 비아우스 씨.

     0.00s  agent 발화 시작: 윤국 씨, 안녕하세요. 저는 비아우스입니다. 힘든 시간을 보내고 계신 분들을 돕는 역할을 하고 있어요.
     0.06s  user  발화 시작: 맞아요.
     0.06s  agent 발화 끝
     0.07s  user  발화 시작: 혹시 무슨 일을 도와주시는데요?
     0.07s  user  발화 끝
     0.09s  agent 발화 시작: 삶에서 변화를 겪거나, 슬픔을 다루는 과정을 겪고 계신 분들께 함께 걸어가 드리는 편이에요. 지금 어떤 마음
     0.09s  user  발화 끝
     0.16s  user  발화 시작: 음… 사실 요즘 너무 불안해요. 뭘 해야 할지, 뭘 하고 싶은지 모르겠어요.
     0.16s  agent 발화 끝
     0.21s  agent 발화 시작: 불안한 마음은 당연한 거예요. 길을 잃은 듯한 느낌이 드는 건, 새로운 시작 앞에서는 흔히 겪는 감정일 수 
     0.21s  user  발화 끝
     0.31s  user  발화 시작: 음.
     0.31s  agent 발화 끝
     0.31s  agent 발화 시작: 혹시 구체적으로 어떤 상황 때문에 불안하신 건가요? 어떤 변화를 앞두고 계신지, 아니면 과거의 어떤 경험이 
     0.31s  user  발화 끝
     0.40s  user  발화 시작: 그렇죠.
     0.40s  agent 발화 끝
     0.40s  user  발화 시작: 졸업을 앞두고 있는데, 앞으로 뭘 해야 할지 정말 막막해요.
     0.40s  user  발화 끝
     0.44s  agent 발화 시작: 졸업 후의 막막함은 많은 분들이 느끼는 감정이에요. 마치 익숙한 세계를 떠나 새로운 세계로 나아가는 듯한 두
     0.44s  user  발화 끝
     0.54s  user  발화 시작: 취업도 어렵고, 하고 싶은 것도 잘 모르겠어요. 그냥… 모든 게 다 불안해요.
     0.54s  agent 발화 끝
     0.59s  agent 발화 시작: 모든 게 불안하다는 말씀, 마음이 많이 힘드시겠어요. 마치 폭풍우 속에서 나침반을 잃은 듯한 기분이실까요?
     0.59s  user  발화 끝
     0.66s  user  발화 시작: 네.
     0.66s  agent 발화 끝
     0.66s  user  발화 시작: 네, 그런 느낌이에요.
     0.66s  user  발화 끝
     0.67s  agent 발화 시작: 괜찮아요. 혼자 모든 걸 감당하려 하지 마세요. 잠시 멈춰서 숨을 고르고, 자신에게 어떤 것이 정말 중요한지
     0.67s  user  발화 끝
     0.77s  user  발화 시작: 숨을 고르는 거요? 어떻게 해야 할까요?
     0.77s  agent 발화 끝
     0.80s  agent 발화 시작: 지금 당장 무엇을 해야 할지 몰라도 괜찮아요. 잠시 눈을 감고, 편안하게 숨을 쉬어 보세요. 그리고 자신에게
     0.80s  user  발화 끝
     0.91s  user  발화 시작: …알겠어요. 감사합니다, 비아우스 씨.
     0.91s  agent 발화 끝
     0.93s  agent 발화 시작: 천천히, 윤국 씨. 괜찮아요. 언제든 다시 이야기하고 싶을 때 저를 찾아주세요. 저는 항상 당신 곁에 있을게
     0.93s  user  발화 끝
     1.00s  agent 발화 끝
