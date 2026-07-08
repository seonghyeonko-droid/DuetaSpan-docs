# v3_inter_13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 언제 수트 시즌 세븐 나머지 편이 나와?
     2.97s  agent 발화 시작: <ret> 그거 많이 궁금해 하더라. 수트 시즌 세븐 나머지 편은 2018년 4월 18일부터 방영을 시작했어
     2.97s  <ret> 발화 (turn1 첫 프레임)
     2.97s  user  발화 끝
     3.97s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.70s]: The remaining episodes of Suits season seven premiered on April 18, 20
     8.91s  user  발화 시작: 아, 4월 18일… 그럼 벌써 좀 됐네.
     8.91s  agent 발화 끝
    11.88s  agent 발화 시작: 그렇지. 시간 진짜 빠르지 않냐?
    11.88s  user  발화 끝
    14.00s  user  발화 시작: 아— 스트리밍으로 볼 수 있어 지금? [sigh]
    14.00s  agent 발화 끝
    16.97s  agent 발화 시작: <ret> 잠깐만. 정보 찾아볼게. 수트 시즌 세븐은 지금 넷플릭스에서 스트리밍으로 볼 수 있어. 괜찮은 선
    16.97s  <ret> 발화 (turn5 첫 프레임)
    16.97s  user  발화 끝
    17.97s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.12s]: Suits season seven is available for streaming on Netflix.
    23.33s  user  발화 시작: 그래. 근데 다른 플랫폼에도 있어?
    23.33s  agent 발화 끝
    25.46s  agent 발화 시작: <ret> 볼 수 있는 방법이 꽤 있어.
    25.46s  <ret> 발화 (turn7 첫 프레임)
    25.46s  user  발화 끝
    26.46s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.55s]: Suits is also available for purchase on platforms like Amazon Prime Vi
    28.00s  agent 발화 시작: 아마존 프라임 비디오나 구글 플레이에서도 에피소드나 시즌 전체를 구매할 수 있어.
    28.00s  agent 발화 끝
    32.67s  user  발화 시작: 음, 알아둬야겠다. 고마워!
    32.67s  agent 발화 끝
    33.94s  agent 발화 시작: 천만에. 그 드라마는 그 시대 상업적 이해관계를 반영하는 흥미로운 권력 관계를 보여줘.
    33.94s  user  발화 끝
    39.03s  agent 발화 끝
