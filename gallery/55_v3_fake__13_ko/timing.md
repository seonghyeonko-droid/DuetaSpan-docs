# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요. | S2 아직 날짜는 정하지 못했어요. 한국에서 하는 콘서트가 있으면  | S3 이천십일년 앨범 'Unbroken'에는 어떤 곡들이 들어있나요 | S4 아, 'Camp Rock' 봤어요! 정말 재미있었죠.

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와요? 이천십오년 기준으로요.
     3.39s  <ret> 발화 (turn1 첫 프레임)
     3.54s  agent 발화 시작: <ret> 데미 로바토의 앨범, 'Confidence'가 이천십오년 십월에 발매되었답니다. 혹시 다른 앨범에
     3.65s  user  발화 끝
     5.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: Demi Lovato’s album, Confidence, was released in October 2015.
     8.41s  user  발화 시작: 네네.
     9.14s  user  발화 끝
    10.68s  agent 발화 끝
    11.71s  user  발화 시작: 아, 'Confidence' 앨범이군요. 그 앨범에 수록된 곡들 좀 알려주실 수 있을까요?
    17.18s  user  발화 끝
    17.30s  <ret> 발화 (turn4 첫 프레임)
    17.38s  agent 발화 시작: <ret> 'Confidence' 앨범에는 'Cool for the Summer', 'Confident', 
    19.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: (tool result) London, UK (51.5074, 0.1278): Paris, France (2560 meters
    20.18s  user  발화 시작: 음.
    20.64s  user  발화 끝
    22.05s  agent 발화 끝
    22.16s  agent 발화 시작: 지금 파리, 로마, 베를린은 런던에서 각각 이천오백육십 미터, 만 사천 이백 미터, 구천삼백 미터 거리에 있
    32.09s  agent 발화 끝
    32.31s  user  발화 시작: 런던은 별로 관심 없고, 데미 로바토 콘서트 티켓 예매하는 거 도와주실 수 있나요?
    37.91s  user  발화 끝
    38.07s  agent 발화 시작: 콘서트 티켓 예매를 도와드릴 수 있어요. 혹시 콘서트 날짜나 장소를 정해두셨나요?
    40.86s  user  발화 시작: 예.
    41.35s  user  발화 끝
    43.39s  agent 발화 끝
    44.14s  user  발화 시작: 아직 날짜는 정하지 못했어요. 한국에서 하는 콘서트가 있으면 좋겠네요.
    48.74s  <ret> 발화 (turn11 첫 프레임)
    48.81s  user  발화 끝
    48.82s  agent 발화 시작: <ret> 죄송하지만, 현재 데미 로바토는 한국에서 콘서트를 할 예정이 없답니다. 다른 지역 콘서트도 찾아볼
    50.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) Demi Lovato is not currently scheduled to perform in Sou
    52.22s  user  발화 시작: 음.
    52.71s  user  발화 끝
    55.91s  agent 발화 끝
    55.95s  user  발화 시작: 아쉽네요. 그럼 데미 로바토의…
    58.48s  user  발화 끝
    59.59s  user  발화 시작: …다른 앨범들은 언제 발매되었는지 알려주세요.
    62.44s  <ret> 발화 (turn15 첫 프레임)
    62.83s  agent 발화 시작: <ret> 데미 로바토의 데뷔 앨범 'Don’t Forget'은 이천팔년에 발매되었어요. 이천십일년에는 'U
    62.96s  user  발화 끝
    64.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: Demi Lovato released her debut album, Don’t Forget, in 2008.
    66.44s  user  발화 시작: 정말요?
    67.08s  user  발화 끝
    70.20s  agent 발화 끝
    71.22s  user  발화 시작: 이천십일년 앨범 'Unbroken'에는 어떤 곡들이 들어있나요?
    75.30s  agent 발화 시작: 'Unbroken' 앨범에는 'Skyscraper', 'Give Your Heart a Break', 'Un
    75.34s  user  발화 끝
    80.36s  user  발화 시작: …혹시 데미 로바토가 가장 좋아하는 색깔이 뭐예요?
    80.99s  agent 발화 끝
    84.17s  <ret> 발화 (turn20 첫 프레임)
    84.41s  agent 발화 시작: <ret> 도쿄의 칠월 십일 평균 기온은 이십팔 점 오도로 예상되며, 습도는 칠십%랍니다. 혹시 여행 계획 
    84.57s  user  발화 끝
    86.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: The average temperature in Tokyo on July 10, 2026 is forecast to be 28
    92.62s  agent 발화 끝
    92.84s  user  발화 시작: 아니요, 그냥 궁금해서요. 데미 로바토가 연기를 한 영화도 있나요?
    96.63s  <ret> 발화 (turn22 첫 프레임)
    96.95s  agent 발화 시작: <ret> 네, 데미 로바토는 이천팔년 디즈니 채널 영화 'Camp Rock'에 출연했어요. 뮤지컬 영화랍니
    97.15s  user  발화 끝
    98.39s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.25s]: Demi Lovato starred in the 2008 Disney Channel movie, Camp Rock.
   101.52s  user  발화 시작: 네네.
   102.25s  user  발화 끝
   103.20s  agent 발화 끝
   103.38s  user  발화 시작: 아, 'Camp Rock' 봤어요! 정말 재미있었죠.
   106.25s  agent 발화 시작: 정말 재미있었죠. 데미 로바토의 연기 변신도 돋보였다고 생각해요. 힘든 시기를 극복하는 청춘의 이야기를 잘 
   106.43s  user  발화 끝
   112.48s  user  발화 시작: 네.
   113.11s  user  발화 끝
   115.42s  agent 발화 끝
   116.50s  user  발화 시작: 맞아요, 정말 감동적이었어요. 오늘 정보 감사합니다.
   120.06s  user  발화 끝
   120.23s  agent 발화 시작: 도움이 되었다니 기쁘네요.
   121.84s  agent 발화 끝
