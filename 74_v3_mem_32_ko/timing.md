# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "유준",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-31",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 하온님. 잘 지냈어요. 전에 얘기했던 교토 여행  | S2 혹시 그쪽으로 가는 버스 시간표를 알아봐 주실 수 있나요? | S3 …혹시 그 근처에 맛있는 식당도 있을까요? | S4 아니에요, 괜찮아요. 그럼 그냥 히로분에서 기다려볼게요.

     0.00s  agent 발화 시작: 안녕하세요, 유준님! 저는 하온이라고 해요. 오늘 하루는 어떠셨어요?
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn6 첫 프레임)
     0.03s  user  발화 시작: 안녕하세요, 하온님. 잘 지냈어요. 전에 얘기했던 교토 여행 기억하시죠?
     0.03s  agent 발화 끝
     0.07s  agent 발화 시작: <ret> 아, 네, 기억하고 있어요. 유준님께서는 알프스 야생화 사진 촬영에 관심이 많으셨죠.
     0.07s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: [2026-05-07] User is into alpine wildflower photography.
     0.07s  user  발화 끝
     0.12s  user  발화 시작: 맞아요. 혹시 교토에서 야생화 사진 찍기 좋은 곳 아세요?
     0.12s  agent 발화 끝
     0.15s  <ret> 발화 (turn14 첫 프레임)
     0.16s  agent 발화 시작: <ret> 교토 식물원이 알프스 야생화 컬렉션으로 유명한 곳이에요. 사진 찍기 좋을 거예요.
     0.16s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Kyoto Botanical Garden, known for its alpine wildflower 
     0.16s  user  발화 끝
     0.20s  user  발화 시작: 식물원 말고 다른 곳은 없을까요? 좀 더 자연스러운 곳을 원해요.
     0.20s  agent 발화 끝
     0.24s  agent 발화 시작: <ret> 구라마 사와 키부네 지역에는 토종 야생화가 있는 산책로가 있어요.
     0.24s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Kurama Temple and Kibune area offer trails with native w
     0.24s  user  발화 끝
     0.27s  <ret> 발화 (turn20 첫 프레임)
     0.28s  user  발화 시작: 음.
     0.28s  agent 발화 끝
     0.29s  user  발화 시작: 아, 구라마 사! 거기 정말 예쁘다고 들었어요.
     0.29s  user  발화 끝
     0.32s  agent 발화 시작: 구라마 사는 경치가 정말 아름다운 곳이죠. 사진 찍기에도 좋을 거예요.
     0.32s  user  발화 끝
     0.32s  <ret> 발화 (turn12 첫 프레임)
     0.36s  user  발화 시작: 네.
     0.36s  agent 발화 끝
     0.36s  user  발화 시작: 혹시 그쪽으로 가는 버스 시간표를 알아봐 주실 수 있나요?
     0.36s  user  발화 끝
     0.40s  agent 발화 시작: <ret> 교토역에서 구라마 사까지 버스가 매 삼십분 간격으로, 아침 여덟시부터 출발해요.
     0.40s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Buses depart from Kyoto Station every 30 minutes, starti
     0.40s  user  발화 끝
     0.44s  user  발화 시작: 아침 여덟시요? 좀 더 늦게 출발하는 버스는 없나요?
     0.44s  agent 발화 끝
     0.47s  <ret> 발화 (turn17 첫 프레임)
     0.47s  agent 발화 시작: <ret> 아홉시 십오분에 버스가 있어요. 그다음은 아홉시 사십오분이에요.
     0.47s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) A bus departs at 9:15 AM. The next is at 9:45 AM.
     0.47s  user  발화 끝
     0.50s  <ret> 발화 (turn22 첫 프레임)
     0.50s  user  발화 시작: 아홉시 사십오분 버스가 좋겠네요. —
     0.50s  agent 발화 끝
     0.53s  user  발화 시작: …혹시 그 근처에 맛있는 식당도 있을까요?
     0.53s  user  발화 끝
     0.55s  agent 발화 시작: <ret> 아, 네, 구라마 사 근처에는 전통적인 일본 요리를 맛볼 수 있는 식당들이 몇 군데 있어요.
     0.55s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Hirobun is a popular restaurant near Kurama Temple, serv
     0.55s  user  발화 끝
     0.61s  agent 발화 시작: 히로분이라는 식당이 전통 요리를 제공해서 인기가 많아요.
     0.61s  agent 발화 끝
     0.64s  user  발화 시작: 히로분, 이름이 예쁘네요. 혹시 예약이 가능할까요?
     0.64s  agent 발화 끝
     0.67s  agent 발화 시작: <ret> 죄송하지만, 히로분은 오늘 예약이 다 찼어요. 내일 오후 한시에 예약 가능해요.
     0.67s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Hirobun is fully booked for today. Available tomorrow at
     0.67s  user  발화 끝
     0.71s  user  발화 시작: 내일은 안 되네요. 다른 식당은 어때요?
     0.71s  agent 발화 끝
     0.74s  agent 발화 시작: <ret> 료칸 쿠라마 온천에서는 전망 좋은 식사를 즐길 수 있어요.
     0.74s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Ryokan Kurama Onsen offers dining with a view.
     0.74s  user  발화 끝
     0.77s  <ret> 발화 (turn28 첫 프레임)
     0.78s  user  발화 시작: 료칸이라… 좀 비쌀 것 같은데요.
     0.78s  agent 발화 끝
     0.80s  agent 발화 시작: 료칸은 보통 가격이 조금 높은 편이죠. 좀 더 저렴한 곳을 찾아볼까요?
     0.80s  user  발화 끝
     0.84s  user  발화 시작: 아니에요, 괜찮아요. 그럼 그냥 히로분에서 기다려볼게요.
     0.84s  agent 발화 끝
     0.87s  agent 발화 시작: 히로분에서 자리가 나기를 기다려 보시는군요.
     0.87s  user  발화 끝
     0.89s  user  발화 시작: 네. 혹시 제가 짐을 좀 맡길 수 있는 곳이 있을까요?
     0.89s  agent 발화 끝
     0.93s  agent 발화 시작: <ret> 쿠라마 온천 료칸에서 짐 보관 서비스를 제공하고 있어요.
     0.93s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) Kurama Onsen Ryokan offers luggage storage services.
     0.93s  user  발화 끝
     0.97s  user  발화 시작: 아, 료칸이네요. 감사합니다.
     0.97s  agent 발화 끝
     0.98s  agent 발화 시작: 천만에요. 즐거운 여행 되세요, 유준님!
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
