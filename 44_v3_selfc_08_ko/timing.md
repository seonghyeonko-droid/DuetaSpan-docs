# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오늘 뉴욕에서 시애틀 가는 가장 좋은 방법을 알아보고 있어요.
     4.93s  agent 발화 시작: 네, 당연히 비행기가 가장 빠른 방법이죠.
     4.93s  user  발화 끝
     8.22s  user  발화 시작: 네, 짐작은 했어요. 음, 대략 비행 시간은 얼마나 돼요?
     8.22s  agent 발화 끝
    13.15s  agent 발화 시작: <ret> 알아봤는데, 가장 빠른 직항편은 다섯 시간 삼십오 분 정도 걸리고, 다른 항공편은 거의 일곱 시간
    13.15s  <ret> 발화 (turn3 첫 프레임)
    13.15s  user  발화 끝
    13.55s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.55s]: (tool result) Nonstop flights from New York to Seattle range from five
    25.76s  user  발화 시작: 여섯— 여섯 시간 반이라니, 와. 앉아 있으려면 정말 오래 걸리겠네요.
    25.76s  agent 발화 끝
    31.24s  agent 발화 시작: 꽤 긴 여정이긴 하죠. 좋은 책이라도 읽으면서 시간을 보내는 건 어떠세요?
    31.24s  user  발화 끝
    37.26s  user  발화 시작: 그러면 좋을지도요. [sigh] 기차 옵션도 알아보고 있어요, 그냥 비교해 보려고요.
    37.26s  agent 발화 끝
    42.74s  agent 발화 시작: 기차는 아주 다른 경험을 제공해요— 느긋한 속도, 아름다운 풍경… 시간이 있다면 꽤 편안할 거예요.
    42.74s  user  발화 끝
    50.42s  user  발화 시작: 기차로 가면 얼마나 걸릴까요?
    50.42s  agent 발화 끝
    52.61s  agent 발화 시작: <ret> 꽤 긴 여행이에요. 엠파이어 빌더 노선은 뉴욕에서 시애틀까지 가는 데 사흘 밤낮이 걸려요. 횡단 
    52.61s  <ret> 발화 (turn9 첫 프레임)
    52.61s  user  발화 끝
    53.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.19s]: (tool result) Amtrak's Empire Builder route from New York to Seattle t
    61.37s  user  발화 시작: 사흘이나요! 그럼 비행기로 가야겠네요. 시차는 어떻게 되죠? 항상 깜빡해요.
    61.37s  agent 발화 끝
    66.31s  agent 발화 시작: 시애틀은 뉴욕보다 세 시간 느려요.
    66.31s  user  발화 끝
    69.05s  user  발화 시작: 세 시간… 맞아요. 그럼 여기서 정오면, 거기서는 아홉 시인가요?
    69.05s  agent 발화 끝
    73.98s  agent 발화 시작: 정확해요.
    73.98s  user  발화 끝
    74.53s  user  발화 시작: 알겠어요, 좋아요. 시애틀에 가면 파이크 플레이스 마켓에 가보려고 해요.
    74.53s  agent 발화 끝
    79.46s  agent 발화 시작: 정말 좋은 선택이에요! 신선한 농산물, 꽃, 지역 공예품으로 가득한 활기찬 곳이에요.
    79.46s  user  발화 끝
    85.49s  user  발화 시작: 그렇게 들었어요. 거기서 물고기를 던진다고 하던데, 아직도 그런가요?
    85.49s  agent 발화 끝
    89.87s  agent 발화 시작: <ret> 네, 물론이죠. 파이크 플레이스 피시 마켓의 물고기 던지기는 1960년대에 시작되었고, 오늘날에도
    89.87s  <ret> 발화 (turn17 첫 프레임)
    89.87s  user  발화 끝
    90.35s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.55s]: (tool result) Pike Place Fish Market employees are known for throwing 
   100.28s  user  발화 시작: 정말 놀랍네요! [laugh] 꼭 봐야겠어요. 음, 호텔도 정해야 하는데… 보스턴— 아니, 시카고로 할게요.
   100.28s  agent 발화 끝
   107.41s  agent 발화 시작: <ret> 알아봤어요. 시카고의 킨지 호텔은 평균 고객 평점이 별 4.5개이고, 객실 요금은 밤에 225달러
   107.41s  <ret> 발화 (turn19 첫 프레임)
   107.41s  user  발화 끝
   107.73s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.55s]: (tool result) The Kinzie Hotel in Chicago has an average customer rati
   115.63s  user  발화 시작: 와, 좀… 비싸네요. 조금 더 저렴한 다른 좋은 옵션은 없을까요?
   115.63s  agent 발화 끝
   121.11s  agent 발화 시작: 다른 대안을 찾아볼 수 있어요. 도시 중심에서 조금 떨어진 곳은 어떠세요?
   121.11s  user  발화 끝
   127.13s  user  발화 시작: 네, 그럴게요. 대중교통으로 이동하기 편리한 곳이면 좋겠어요.
   127.13s  agent 발화 끝
   130.97s  agent 발화 시작: <ret> 알아봤는데, 프리핸드 시카고는 별 4개 등급이고, 1박당 평균 150달러예요. 그린 라인과 핑크 
   130.97s  <ret> 발화 (turn23 첫 프레임)
   130.97s  user  발화 끝
   131.61s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.10s]: (tool result) The Freehand Chicago hotel is rated 4 stars, has an aver
   142.48s  user  발화 시작: 150달러… 훨씬 좋네요. 고마워요!
   142.48s  agent 발화 끝
   144.67s  agent 발화 시작: 도와드릴 수 있어서 기뻐요. 섬세한 마카롱의 맛을 조화롭게 맞추는 것과 비슷하네요— 완벽한 조합을 찾는 것이
   144.67s  user  발화 끝
   153.44s  user  발화 시작: [chuckle] 좋은 비유네요. 거의 다 준비된 것 같아요.
   153.44s  agent 발화 끝
   157.82s  agent 발화 시작: 정말 다행이네요. 오늘 더 도와드릴 일이 있을까요?
   157.82s  user  발화 끝
   161.66s  agent 발화 끝
