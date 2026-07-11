# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "윤호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어… 안녕하세요. 혹시 제가 어디 가려면, 집에서 거기까지 얼 | S2 그럼요. 해운대는 제 집에서 얼마나 떨어져 있을까요? | S3 — 음, 잠깐만요. | S4 아니요, 괜찮아요. 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 윤호님. 저는 에룬이라고 해요. 편안하게 친구나 사회생활에 대해 이야기 나눠보시죠.
     0.08s  <ret> 발화 (turn2 첫 프레임)
     0.08s  user  발화 시작: 어… 안녕하세요. 혹시 제가 어디 가려면, 집에서 거기까지 얼마나 걸릴까요?
     0.08s  agent 발화 끝
     0.16s  agent 발화 시작: <ret> 생일 저녁 식사 장소를 찾으셨던 적이 있으시죠? 그쪽으로 가는 데 얼마나 걸릴지 알려드릴게요.
     0.16s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: [2026-03-22] Past chat — Planning a birthday dinner: party of six; loo
     0.16s  user  발화 끝
     0.25s  user  발화 시작: 응.
     0.25s  agent 발화 끝
     0.26s  user  발화 시작: 아니, 그게 아니라. 그냥… 어제 친구랑 얘기했는데, 해운대에서 만나기로 했거든요.
     0.26s  user  발화 끝
     0.28s  <ret> 발화 (turn8 첫 프레임)
     0.33s  agent 발화 시작: 해운대라면… 부산에 사시는 윤호님께서는 해운대가 가까우시겠네요.
     0.33s  user  발화 끝
     0.38s  user  발화 시작: 응응.
     0.38s  agent 발화 끝
     0.39s  user  발화 시작: 그럼요. 해운대는 제 집에서 얼마나 떨어져 있을까요?
     0.39s  user  발화 끝
     0.44s  agent 발화 시작: <ret> 자가용으로 약 십이 점 오킬로미터, 이십오분 정도 걸리겠어요.
     0.44s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Distance: 12.5 km, Duration: 25 minutes by car.
     0.44s  user  발화 끝
     0.50s  user  발화 시작: 그치.
     0.50s  agent 발화 끝
     0.50s  agent 발화 시작: 대중교통을 이용하시면 조금 더 시간이 걸릴 수 있습니다. 혹시 어떤 교통수단을 선호하시나요?
     0.50s  user  발화 끝
     0.56s  <ret> 발화 (turn12 첫 프레임)
     0.59s  user  발화 시작: 음… 버스가 편하긴 한데, 지하철이 더 빠를까요?
     0.59s  agent 발화 끝
     0.64s  agent 발화 시작: <ret> 지하철을 타시면 사십분 정도 걸리고, 백일번 버스를 타고 부산역에서 환승하시면 됩니다.
     0.64s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Transit: 40 minutes, Bus route 101, transfer at Busan St
     0.64s  user  발화 끝
     0.66s  <ret> 발화 (turn16 첫 프레임)
     0.73s  user  발화 시작: 그치.
     0.73s  agent 발화 끝
     0.73s  user  발화 시작: — 음, 잠깐만요.
     0.73s  user  발화 끝
     0.76s  user  발화 시작: … 혹시 그 버스, 지금 바로 탈 수 있어요?
     0.76s  user  발화 끝
     0.82s  agent 발화 시작: <ret> 네, 오분 뒤에 열네시 사십이분에 백일번 버스가 도착할 예정입니다.
     0.82s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Route 101: Next bus in 5 minutes, estimated arrival 14:4
     0.82s  user  발화 끝
     0.89s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요?
     0.89s  agent 발화 끝
     0.93s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
     0.93s  agent 발화 끝
     0.95s  agent 발화 시작: 천만에요. 혹시 친구분과 즐거운 시간 보내시길 바랍니다.
     0.95s  user  발화 끝
     1.00s  agent 발화 끝
