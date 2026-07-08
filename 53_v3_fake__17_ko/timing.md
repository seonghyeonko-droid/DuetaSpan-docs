# v3_fake__17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 고양이를 쓴 배우가 누구였죠?
     2.66s  agent 발화 시작: 아, 마이크 마이어스였군요. 다재다능하시죠, 그렇죠?
     2.66s  user  발화 끝
     5.98s  user  발화 시작: 아, 맞다! 마이크 마이어스. 음, 다른 가족 영화에도 출연했었나… 뭐 그런 거요?
     5.98s  agent 발화 끝
    13.94s  agent 발화 시작: 네, 물론이죠. *슈렉*으로 아주 유명하시잖아요.
    13.94s  user  발화 끝
    17.26s  user  발화 시작: 슈렉! 그래요! 딱 그게 생각나고 있었어요. [laugh] *슈렉* 영화 전부 더빙했어요?
    17.26s  agent 발화 끝
    24.57s  agent 발화 시작: 네, 맞아요. 다섯 편의 장편 영화에서 모두 슈렉 목소리를 연기했어요.
    24.57s  user  발화 끝
    31.21s  user  발화 시작: 와, 다섯 편이요. 오우거 역할이 많네요.
    31.21s  agent 발화 끝
    35.19s  agent 발화 시작: 한 역할에 꽤나 헌신적인 모습이라고 할 수 있겠네요.
    35.19s  user  발화 끝
    40.50s  user  발화 시작: 오콘코 교수는요, 혹시 영화로 각색될 때 이야기의 변화를… 음… 연구해 보신 적 있으세요?
    40.50s  agent 발화 끝
    49.14s  agent 발화 시작: 역사가로서, 각색이 그 시대의 감성을 반영한다는 것을 자주 관찰했어요. 정말 흥미로운 상호작용이죠.
    49.14s  user  발화 끝
    57.10s  user  발화 시작: 그 말이 맞아요. 이야기는 그대로인데… 아닌 것 같기도 하고요?
    57.10s  agent 발화 끝
    63.08s  agent 발화 시작: 맞아요. 핵심 이야기는 종종 그대로 유지되지만, 해석은 진화하죠.
    63.08s  user  발화 끝
    68.39s  user  발화 시작: 알겠어요. 좀 뜬금없지만, 호주 수도는 어디예요?
    68.39s  agent 발화 끝
    72.38s  agent 발화 시작: <ret> 간단한 질문이네요. 캔버라는 1913년에 호주의 수도가 되었고, 시드니와 멜버른 사이의 타협안으로
    72.38s  <ret> 발화 (turn13 첫 프레임)
    72.38s  user  발화 끝
    73.26s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.99s]: Canberra is the capital city of Australia, officially becoming so in 1
    83.66s  user  발화 시작: 1913년이라고요? 생각보다 꽤 최근이네요, 사실.
    83.66s  agent 발화 끝
    86.98s  agent 발화 시작: 역사의 큰 흐름을 생각하면 비교적 최근이죠.
    86.98s  user  발화 끝
    90.97s  user  발화 시작: 그렇군요. 저기, 마이크 마이어스가 오스카를 받은 적 있나요?
    90.97s  agent 발화 끝
    96.28s  agent 발화 시작: <ret> 알아볼까요. 마이크 마이어스는 *오스틴 파워스: 인터내셔널 맨 오브 미스터리*로 메이크업 부문에서
    96.28s  <ret> 발화 (turn17 첫 프레임)
    96.28s  user  발화 끝
    97.28s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.33s]: Mike Myers has never won an Academy Award, but he has been nominated o
   108.23s  user  발화 시작: 메이크업만요? 좀 이상하네요.
   108.23s  agent 발화 끝
   110.22s  agent 발화 시작: 영화 제작은 협업의 예술이라는 점을 보여주는 것 같아요, 그렇죠?
   110.22s  user  발화 끝
   116.20s  user  발화 시작: 네, 그런 것 같아요. [sigh] 좋아요, 마지막 질문 하나만 더… 아프리카에서 가장 높은 산은 뭐예요?
   116.20s  agent 발화 끝
   126.16s  agent 발화 시작: <ret> 네, 물론이죠. 탄자니아에 있는 킬리만자로는 높이가 5895미터에 달하며, 아프리카에서 가장 높은
   126.16s  <ret> 발화 (turn21 첫 프레임)
   126.16s  user  발화 끝
   126.32s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.66s]: Mount Kilimanjaro, located in Tanzania, is the highest mountain in Afr
   134.13s  user  발화 시작: 탄자니아는 케냐 근처예요?
   134.13s  agent 발화 끝
   136.12s  agent 발화 시작: 네, 케냐와 국경을 접하고 있어요. 그 지역은 오랜 역사를 가진 무역 네트워크를 가지고 있어요.
   136.12s  user  발화 끝
   145.42s  user  발화 시작: 아, 몰랐어요.
   145.42s  agent 발화 끝
   146.74s  agent 발화 시작: 맞아요. 특히 스와힐리 해안은 수세기 동안 상품과 아이디어의 중요한 통로였어요.
   146.74s  user  발화 끝
   153.38s  user  발화 시작: 그렇군요… 흥미롭네요.
   153.38s  agent 발화 끝
   154.71s  agent 발화 시작: <ret> 사실 그 지역은 제가 상당한 시간을 들여 연구한 분야이기도 해요.
   154.71s  <ret> 발화 (turn27 첫 프레임)
   154.71s  user  발화 끝
   155.71s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=6.64s]: Current time in Honolulu is 10:32 PM HST.
   161.35s  user  발화 시작: 와. 음, 멋지네요. 이제 질문은 다 한 것 같아요.
   161.35s  agent 발화 끝
   167.33s  agent 발화 시작: 대화해서 즐거웠습니다.
   167.33s  user  발화 끝
   168.66s  agent 발화 끝
