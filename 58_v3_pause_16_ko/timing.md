# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "라린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오리지널스 시즌 오가 몇 부작이에요? | S2 맞아요, 요즘 좀 힘든 변화가 있긴 했어요… | S3 사실은… 이번 주말에 중요한… | S4 아직 완벽하진 않지만, 최선을 다하고 있어요…

     0.00s  user  발화 시작: 오리지널스 시즌 오가 몇 부작이에요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.05s  agent 발화 시작: <ret> 오리지널스 시즌 오는 총 십삼부작으로 구성되어 있습니다. 요즘 어떻게 지내세요?
     0.05s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: The fifth season of The Originals consists of thirteen episodes.
     0.05s  user  발화 끝
     0.15s  user  발화 시작: 네네.
     0.15s  agent 발화 끝
     0.16s  user  발화 시작: 아, 십삼부작이었구나… 기억이 잘 안 났어요.
     0.16s  user  발화 끝
     0.22s  agent 발화 시작: 기억이 가끔 흐릿해지는 건 자연스러운 일이에요. 변화에 적응하는 과정에서 그럴 수 있습니다.
     0.22s  user  발화 끝
     0.29s  <ret> 발화 (turn12 첫 프레임)
     0.33s  user  발화 시작: 맞아요, 요즘 좀 힘든 변화가 있긴 했어요…
     0.33s  agent 발화 끝
     0.40s  agent 발화 시작: 힘든 변화가 있으셨군요. 괜찮으시다면, 어떤 변화인지 조금만 말씀해 주시겠어요?
     0.40s  user  발화 끝
     0.49s  user  발화 시작: 음.
     0.49s  agent 발화 끝
     0.50s  agent 발화 시작: 편안하게 이야기하실 수 있도록 제가 곁에 있겠습니다. 어떤 이야기든 괜찮아요.
     0.50s  user  발화 끝
     0.60s  user  발화 시작: 그렇죠.
     0.60s  agent 발화 끝
     0.61s  user  발화 시작: 사실은… 이번 주말에 중요한…
     0.61s  user  발화 끝
     0.65s  user  발화 시작: …발표가 있는데 너무 걱정돼요.
     0.65s  user  발화 끝
     0.69s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 두시 삼십삼분입니다. 발표 준비는 잘 되어 가시나요?
     0.69s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: Current time and date: It is Friday, July 10, 2026 at 2:33 PM in Asia/
     0.69s  user  발화 끝
     0.81s  user  발화 시작: 와.
     0.81s  agent 발화 끝
     0.82s  user  발화 시작: 아직 완벽하진 않지만, 최선을 다하고 있어요…
     0.82s  user  발화 끝
     0.88s  agent 발화 시작: 최선을 다하고 계시다니 정말 멋지세요. 긍정적인 마음으로 준비하시면 좋은 결과가 있을 거예요.
     0.88s  user  발화 끝
     1.00s  agent 발화 끝
