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
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와요, 이천십오년에? | S2 그 앨범 이름이 뭐였죠? | S3 … 혹시 그 앨범이 빌보드 차트에서 몇 위까지 올랐는지 알 수 | S4 투어를 돌았군요.

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와요, 이천십오년에?
     2.91s  <ret> 발화 (turn1 첫 프레임)
     3.07s  agent 발화 시작: <ret> 이천십오년에 발매되었다고 합니다.
     3.23s  user  발화 끝
     4.19s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.30s]: Demi Lovato is an American singer, songwriter, and actress.
     5.38s  agent 발화 끝
     5.82s  user  발화 시작: 이천십오년 몇 월에 나왔는데요?
     8.40s  user  발화 끝
     8.53s  <ret> 발화 (turn3 첫 프레임)
     8.61s  agent 발화 시작: <ret> 이천십오년에는 데미 로바토 씨가 새 앨범을 발표했는데… 십월에 발매되었어요.
    10.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: The album was released in October 2015.
    13.89s  agent 발화 끝
    14.25s  user  발화 시작: 아, 십월이군요.
    15.67s  user  발화 끝
    15.76s  agent 발화 시작: 맞아요. 십월에 발매되었답니다. 혹시 다른 앨범에 대해서도 여쭤보실까요?
    21.55s  agent 발화 끝
    21.91s  user  발화 시작: 그 앨범 이름이 뭐였죠?
    23.65s  <ret> 발화 (turn7 첫 프레임)
    23.98s  user  발화 끝
    24.04s  agent 발화 시작: <ret> 그 앨범의 이름은… "Confident" 였어요. 앨범 제목이 'Confident'랍니다.
    25.25s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.59s]: The album is titled "Confident".
    27.11s  user  발화 시작: 음.
    27.61s  user  발화 끝
    28.63s  agent 발화 끝
    28.75s  user  발화 시작: "Confident"요? 음… 그 앨범에 수록된 노래…
    32.63s  user  발화 끝
    34.37s  user  발화 시작: …중에 가장 인기 있는 곡이 뭐예요?
    36.82s  user  발화 끝
    37.06s  agent 발화 시작: "Confident" 앨범에 수록된 노래 중에서 가장 인기 있는 곡을 알고 싶으신 거군요. 잠시만 확인해 볼
    42.87s  user  발화 시작: … 혹시 그 앨범이 빌보드 차트에서 몇 위까지 올랐는지 알 수 있을까요?
    43.50s  agent 발화 끝
    48.48s  <ret> 발화 (turn13 첫 프레임)
    48.79s  user  발화 끝
    48.88s  agent 발화 시작: <ret> "Confident" 앨범은 빌보드 이백 차트에서 팔위까지 올랐어요. 앨범이 팔위까지 올라갔답니다
    50.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: (tool result) The album peaked at number 8 on the Billboard 200 chart.
    55.66s  user  발화 시작: 팔위군요. 생각보다 높네요.
    55.70s  agent 발화 끝
    57.90s  agent 발화 시작: 네, 꽤 높은 순위였어요. 앨범이 성공적으로 데뷔했죠.
    57.92s  user  발화 끝
    62.16s  agent 발화 끝
    63.30s  user  발화 시작: 그 앨범 발매 이후에 데미 로바토 씨는 어떤 활동을 했나요?
    68.00s  <ret> 발화 (turn17 첫 프레임)
    68.32s  agent 발화 시작: <ret> "Confident" 앨범 발매 후에는 전 세계 투어를 진행하며 앨범을 홍보했어요. 투어를 통해 
    68.38s  user  발화 끝
    70.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Lovato went on a world tour to promote the album.
    72.43s  user  발화 시작: 예.
    72.88s  user  발화 끝
    76.02s  user  발화 시작: 투어를 돌았군요.
    76.05s  agent 발화 끝
    77.32s  agent 발화 시작: 맞아요. 전 세계 여러 나라를 돌며 팬들과 소통했죠. 혹시 투어에 대한 더 자세한 정보를 원하시나요?
    77.45s  user  발화 끝
    80.94s  user  발화 시작: 음.
    81.15s  user  발화 끝
    84.97s  agent 발화 끝
    85.37s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
    87.72s  user  발화 끝
    87.89s  agent 발화 시작: 네, 알겠습니다. 즐거운 하루 보내세요.
    90.62s  agent 발화 끝
